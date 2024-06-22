import React, { useEffect, useState } from 'react';
import { Button, CardBody, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import api from '../../constants/api';
import message from '../Message';

export default function QuestionTab({ id }) {
  QuestionTab.propTypes = {
    id: PropTypes.any,
  };

  const [getQuestion, setQuestions] = useState([]);
  const [getISOQuestion, setISOQuestions] = useState([]);
  const [addContactModal, setAddContactModal] = useState(false);
  const [newQuestionData, setNewQuestionData] = useState({
    question_id: '',
    iso_code_id: id,
  });

  const addContactToggle = () => {
    setAddContactModal(!addContactModal);
  };
  const deleteRecord = (questionId) => {
    Swal.fire({
      title: `Are you sure?`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        api.post('/isocode/deleteISOquestion', { question_id: questionId })
          .then(() => {
            Swal.fire('Deleted!', 'Contact has been deleted.', 'success');
            message('Record deleted successfully', 'success'); 
            setTimeout(() => {
              window.location.reload();
            }, 300);
          })
          .catch(() => {
            message('Unable to delete record.', 'error');
          });
      }
    });
  };

  const getQuestions = () => {
    api.get('/isocode/getQuestion', { params: { iso_code_id: id } })
      .then((res) => {
        setQuestions(res.data.data);
      })
      .catch(() => {
        message('Unable to fetch questions', 'error');
      });
  };

  const getISOQuestions = () => {
    api.post('/isocode/getIsoQuestionById', { iso_code_id: id })
      .then((res) => {
        setISOQuestions(res.data.data);
      })
      .catch(() => {
        message('Content Data Not Found', 'info');
      });
  };

  const insertQuestionHistory = () => {
    if (newQuestionData.question_id !== '') {
      api.post('/isocode/insertQuestion', newQuestionData)
        .then(() => { 
          message('Client inserted successfully.', 'success');
          addContactToggle();
          getISOQuestions();
          window.location.reload();
        })
        .catch(() => {
          message('Network connection error.', 'error');
        });
    } else {
      message('Please fill all required fields', 'warning');
    }
  };

  const handleAddNewQuestion = (e) => {
    setNewQuestionData({ ...newQuestionData, [e.target.name]: e.target.value });
  };


  useEffect(() => {
    getQuestions();
    getISOQuestions();
  }, [id]);

  const columns = [
    { name: 'id' },
    { name: 'Title' }
  ];

  return (
    <>
      <Form>
        <FormGroup>
          <Row>
            <Col md="3">
              <FormGroup>
                <Button color="primary" className="shadow-none" onClick={addContactToggle}>
                  Add New Question
                </Button>
                <Modal size="lg" isOpen={addContactModal} toggle={addContactToggle}>
                  <ModalHeader toggle={addContactToggle}>New Question</ModalHeader>
                  <ModalBody>
                    <Row>
                      <Col md="12">
                        <CardBody>
                          <Form>
                            <Row>
                              <Col md="4">
                                <FormGroup>
                                  <Label>
                                    Title<span className="required">*</span>
                                  </Label>
                                  <Input
                                    type="select"
                                    name="question_id"
                                    onChange={handleAddNewQuestion}
                                    value={newQuestionData.question_id}
                                  >
                                    <option value="" selected="selected">
                                      Please Select
                                    </option>
                                    {getQuestion && getQuestion.map((ele) => (
                                      <option key={ele.question_id} value={ele.question_id}>
                                        {ele.question}
                                      </option>
                                    ))}
                                  </Input>
                                </FormGroup>
                              </Col>
                            </Row>
                          </Form>
                        </CardBody>
                      </Col>
                    </Row>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      className="shadow-none"
                      color="primary"
                      onClick={insertQuestionHistory}
                    >
                      Submit
                    </Button>
                    <Button
                      color="secondary"
                      className="shadow-none"
                      onClick={addContactToggle}
                    >
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
              </FormGroup>
            </Col>
          </Row>
          <Row>      
            <table>
              <thead>
                <tr>
                  {columns.map((cell) => (
                    <td key={cell.name}>{cell.name}</td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {getISOQuestion && getISOQuestion.map((element, i) => (
                  <tr key={element.iso_code_id}>
                    <td>{i + 1}</td>
                    <td>{element.question}</td>
                    <td>
                      <div color="primary" className="anchor">
                        <span onClick={() => deleteRecord(element.question_id)}>
                          <Icon.Trash2 />
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Row>      
        </FormGroup>
      </Form>
    </>
  );
}