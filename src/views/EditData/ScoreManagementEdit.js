import React, { useEffect, useState,useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Button,
  TabPane,
  TabContent,
  Label,
  Input,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import { ToastContainer } from 'react-toastify';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import message from '../../components/Message';
import api from '../../constants/api';
import KeyStaffDetails from '../../components/ScoreManage/KeyStaffDetails';
import StaffButton from '../../components/ScoreManage/StaffButton';
import creationdatetime from '../../constants/creationdatetime';
import Tab from '../../components/ScoreManage/Tab';
import './StaffEdit.css'; // Custom CSS for further styling
import AppContext from '../../context/AppContext';

import BarChart from './BarChart';
import CategoryChart from '../../components/ScoreManage/CategoryChartss'; 

const StaffEdit = () => {
  // All state variables
  const [staffeditdetails, setStaffEditDetails] = useState({company_id: '',
    iso_code_id: ''});
  const [scoreHistory, setScoreHistory] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 5;

  // Navigation and Parameter Constants
  const { id } = useParams();
  const navigate = useNavigate();
  const { loggedInuser } = useContext(AppContext);

  const tabs = [
    { id: '1', name: 'Score History' },
    { id: '2', name: 'Score Summary' },
    { id: '3', name: 'Category Wise Chart' },
  ];
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    setActiveTab(tab);
  };

  // Fetch Questions and Options
  const fetchQuestions = () => {
    api
      .get('/score/getQuestions', { params: { iso_code_id: staffeditdetails && staffeditdetails.iso_code_id }})
      .then((res) => {
        // Transform the data to combine options into an array and store correct answers
        const transformedQuestions = res.data.data.map((question) => ({
          ...question,
          options: [question.option_1, question.option_2, question.option_3, question.option_4].filter(Boolean)
        }));
        const correctAns = res.data.data.reduce((acc, question) => {
          acc[question.question_id] = question.correct_answer;
          return acc;
        }, {});
        setQuestions(transformedQuestions);
        setCorrectAnswers(correctAns);
      })
      .catch(() => {
        message('Questions not found', 'info');
      });
  };

  // Fetch Previous Answers
  const fetchPreviousAnswers = () => {
    api
      .post('/score/getScoreHistory', { score_management_id: id })
      .then((res) => {
        const previousAnswers = res.data.data.reduce((acc, answer) => {
          acc[answer.question_id] = answer.answer;
          return acc;
        }, {});
        setSelectedAnswers(previousAnswers);
      })
      .catch(() => {
        message('Previous answers not found', 'info');
      });
  };

  // Setting Data in Staff Details
  const handleInputs = (e) => {
    setStaffEditDetails({ ...staffeditdetails, [e.target.name]: e.target.value });
  };

  // Route Change
  const applyChanges = () => { };
  const saveChanges = () => {
    navigate('/ScoreManagement');
    window.location.reload();
  };
  const backToList = () => {
    navigate('/ScoreManagement');
  };

  // Api call for getting Staff Data By ID
  const editStaffById = () => {
    api
      .post('/score/getScoreManageById', { score_management_id: id })
      .then((res) => {
        setStaffEditDetails(res.data.data[0]);
      })
      .catch(() => {
        message('Staff Data Not Found', 'info');
      });
  };

  // Api call for Editing Staff Details
  const editStaffData = () => {
    if (
      staffeditdetails.company_id !== '' && staffeditdetails.iso_code_id !== ''
    )
    {
    staffeditdetails.modification_date = creationdatetime;
    staffeditdetails.modified_by = loggedInuser.first_name;

    api
      .post('/score/editScore', staffeditdetails)
      .then(() => {
        message('Record edited successfully', 'success');
        editStaffById();
      })
      .catch(() => {
        message('Unable to edit record.', 'error');
      });
    }else {
      message('Please fill all required fields', 'warning');
    }
  };
  console.log('iso',staffeditdetails.iso_code_id);
  console.log('company',staffeditdetails.company_id);


  // Api call for getting Score History Data
  const fetchScoreHistory = () => {
    api
      .post('/score/getScoreHistory', { score_management_id: id })
      .then((res) => {
        setScoreHistory(res.data.data);
      })
      .catch(() => {
        message('Score History Not Found', 'info');
      });
  };

  useEffect(() => {
    editStaffById();
    fetchScoreHistory();
    fetchQuestions();
    fetchPreviousAnswers();
  }, [id, staffeditdetails && staffeditdetails.iso_code_id]);

  // Handle Checkbox Changes
  const handleCheckboxChange = (questionId, option) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option,
    }));
  };

  // Handle Text Input Changes for Objective Questions
  const handleTextInputChange = (questionId, value) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  // Handle Form Submission
  const handleSubmitAnswers = () => {
    const answersToUpdate = [];
    const answersToAdd = [];

    Object.entries(selectedAnswers).forEach(([questionId, answer]) => {
      const questionIdNumber = Number(questionId);
      const existingAnswer = scoreHistory.find(item => item.question_id === questionIdNumber);

      if (existingAnswer) {
        if (existingAnswer.answer !== answer) {
          answersToUpdate.push({
            ...existingAnswer,
            answer,
            modification_date: new Date(),
          });
        }
      } else {
        answersToAdd.push({
          score_management_id: id,
          question_id: questionIdNumber,
          answer,
          creation_date: new Date(),
        });
      }
    });

    const updatePromises = answersToUpdate.map(answer =>
      api.post('/score/editScoreHistory', answer)
    );

    const addPromise = answersToAdd.length > 0
      ? api.post('/score/addScoreHistory', { answers: answersToAdd })
      : Promise.resolve();

    Promise.all([...updatePromises, addPromise])
      .then(() => {
        message('Answers submitted successfully', 'success');

        // Count answered, unanswered, and correct questions
        const answeredCount = Object.keys(selectedAnswers).length;
        const unansweredCount = questions.length - answeredCount;
        const correctCount = Object.entries(selectedAnswers).reduce((acc, [questionId, answer]) => {
          if (correctAnswers[questionId] === answer) {
            acc++;
          }
          return acc;
        }, 0);

        // Update the main table with these counts
        return api.post('/score/updateAnswerCounts', {
          score_management_id: id,
          iso_code_id: staffeditdetails && staffeditdetails.iso_code_id,
          total_question: questions.length,
          answered_count: answeredCount,
          unanswered_count: unansweredCount,
          correct_count: correctCount
        });
      })
      .then(() => {
        fetchScoreHistory();
      })
      .catch(() => {
        message('Unable to submit answers.', 'error');
      });
  };

  // Pagination Helpers
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const calculateCategoryData = () => {
    const categoryData = questions.reduce((acc, question) => {
      const category = question.category_title;
      if (!acc[category]) {
        acc[category] = { name: category, answeredCount: 0, correctCount: 0 };
      }
      acc[category].answeredCount += selectedAnswers[question.question_id] ? 1 : 0;
      acc[category].correctCount += correctAnswers[question.question_id] === selectedAnswers[question.question_id] ? 1 : 0;
      return acc;
    }, {});

    return Object.values(categoryData);
  };

  const categories = calculateCategoryData();

  return (
    <>
      <BreadCrumbs />
      <ToastContainer />

      <StaffButton
        navigate={navigate}
        saveChanges={saveChanges}
        applyChanges={applyChanges}
        backToList={backToList}
        editStaffData={editStaffData}
        id={id}
      />

      <BreadCrumbs heading={staffeditdetails && staffeditdetails.score_management_id} />
      <KeyStaffDetails
        staffeditdetails={staffeditdetails}
        handleInputs={handleInputs}
      />

      <Form>
        <FormGroup>
          <ComponentCard title="More Details">
            <ToastContainer />
            <Tab toggle={toggle} tabs={tabs} />

            <TabContent className="p-4" activeTab={activeTab}>
              <TabPane tabId="1">
                {currentQuestions.map((question) => (
                  <Card key={question.question_id} className="mb-3">
                    <CardBody>
                      <CardTitle tag="h5">{question.question}</CardTitle>
                      <CardText>
                        {question.question_type === 'MCQ' && Array.isArray(question.options) && question.options.length > 0 && (
                          question.options.map((option) => (
                            <FormGroup check key={option}>
                              <Label check>
                                <Input
                                  type="checkbox"
                                  checked={selectedAnswers[question.question_id] === option}
                                  onChange={() => handleCheckboxChange(question.question_id, option)}
                                />
                                {option}
                              </Label>
                            </FormGroup>
                          ))
                        )}
                        {question.question_type === 'Yes/No' && (
                          <div>
                            <FormGroup check>
                              <Label check>
                                <Input
                                  type="radio"
                                  checked={selectedAnswers[question.question_id] === 'Yes'}
                                  onChange={() => handleCheckboxChange(question.question_id, 'Yes')}
                                />
                                Yes
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input
                                  type="radio"
                                  checked={selectedAnswers[question.question_id] === 'No'}
                                  onChange={() => handleCheckboxChange(question.question_id, 'No')}
                                />
                                No
                              </Label>
                            </FormGroup>
                          </div>
                        )} 
                        {question.question_type === 'Objective' && (
                          <FormGroup>
                            <Input
                              type="text"
                              value={selectedAnswers[question.question_id] || ''}
                              onChange={(e) => handleTextInputChange(question.question_id, e.target.value)}
                            />
                          </FormGroup>
                        )}
                      </CardText>
                    </CardBody>
                  </Card>
                ))}
                <Button color="primary" onClick={handleSubmitAnswers}>
                  Submit Answers
                </Button>
                <Pagination aria-label="Page navigation example" className="mt-4">
                  <PaginationItem disabled={currentPage === 1}>
                    <PaginationLink first onClick={() => paginate(1)} />
                  </PaginationItem>
                  <PaginationItem disabled={currentPage === 1}>
                    <PaginationLink previous onClick={() => paginate(currentPage - 1)} />
                  </PaginationItem>
                  {[...Array(totalPages).keys()].map(number => (
                    <PaginationItem active={currentPage === number + 1} key={number + 1}>
                      <PaginationLink onClick={() => paginate(number + 1)}>
                        {number + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem disabled={currentPage === totalPages}>
                    <PaginationLink next onClick={() => paginate(currentPage + 1)} />
                  </PaginationItem>
                  <PaginationItem disabled={currentPage === totalPages}>
                    <PaginationLink last onClick={() => paginate(totalPages)} />
                  </PaginationItem>
                </Pagination>
              </TabPane>
              <TabPane tabId="2">
                <BarChart
                  answeredCount={scoreHistory.length}
                  unansweredCount={questions.length - scoreHistory.length}
                  totalQuestion={questions.length}
                  correctCount={scoreHistory.filter(item => correctAnswers[item.question_id] === item.answer).length}
                />
              </TabPane>
              <TabPane tabId="3">
                <CategoryChart categories={categories} />
              </TabPane>
            </TabContent>
          </ComponentCard>
        </FormGroup>
      </Form>
    </>
  );
};

export default StaffEdit;
