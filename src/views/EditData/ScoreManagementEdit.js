import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Button,
  TabPane,
  TabContent,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Table,
  Input
} from 'reactstrap';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import * as Icon from 'react-feather';
import { ToastContainer } from 'react-toastify';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import AttachmentModalV2 from '../../components/Tender/AttachmentModalV2';
import ViewFileComponentV2 from '../../components/ProjectModal/ViewFileComponentV2';
import message from '../../components/Message';
import api from '../../constants/api';
import KeyStaffDetails from '../../components/ScoreManage/KeyStaffDetails';
import StaffButton from '../../components/ScoreManage/StaffButton';
import creationdatetime from '../../constants/creationdatetime';
import Tab from '../../components/ScoreManage/Tab';

const StaffEdit = () => {
  // All state variables
  const [staffeditdetails, setStaffEditDetails] = useState('');
  const [scoreHistory, setScoreHistory] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('add'); // 'add' or 'edit'
  const [currentScore, setCurrentScore] = useState({
    question_id: '',
    title: '',
    review_status: '',
    comments: '',
    reviewer: ''
  });
  const [RoomName, setRoomName] = useState('');
  const [fileTypes, setFileTypes] = useState('');
  const [attachmentModal, setAttachmentModal] = useState(false);
  const [pictureData, setDataForPicture] = useState({
    modelType: '',
  });

  // Navigation and Parameter Constants
  const { id } = useParams();
  const navigate = useNavigate();

  const tabs = [
    { id: '1', name: 'Score History' },
    { id: '2', name: 'Attachment' },
  ];
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    setActiveTab(tab);
  };

  const [customername, setCustomerName] = useState([]);

  const getCustomerName = () => {
    api
      .get('/score/getQuestionName')
      .then((res) => {
        setCustomerName(res.data.data);
      })
      .catch(() => {
        message('Company not found', 'info');
      });
  };
  useEffect(() => {
    getCustomerName();
 
  }, []);

  // Setting Data in Staff Details
  const handleInputs = (e) => {
    setStaffEditDetails({ ...staffeditdetails, [e.target.name]: e.target.value });
  };

  // Setting Picture Data
  const dataForPicture = () => {
    setDataForPicture({
      modelType: 'picture',
    });
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
    staffeditdetails.modification_date = creationdatetime;

    api
      .post('/score/editScore', staffeditdetails)
      .then(() => {
        message('Record edited successfully', 'success');
        editStaffById();
      })
      .catch(() => {
        message('Unable to edit record.', 'error');
      });
  };

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

  // Api call for Adding or Editing Score History
  const handleSaveScore = () => {
    if (modalType === 'add') {
      currentScore.score_management_id = id;

      api
        .post('/score/addScoreHistory', currentScore)
        .then(() => {
          message('Score added successfully', 'success');
          fetchScoreHistory();
        })
        .catch(() => {
          message('Unable to add score.', 'error');
        });
    } else {
      api
        .post('/score/editScoreHistory', currentScore)
        .then(() => {
          message('Score edited successfully', 'success');
          fetchScoreHistory();
        })
        .catch(() => {
          message('Unable to edit score.', 'error');
        });
    }
    setIsModalOpen(false);
  };

  // Api call for Deleting Score History
  const handleDeleteScore = (questionid) => {
    api
      .post('/score/deleteScoreHistory', { score_management_history_id:questionid })
      .then(() => {
        message('Score deleted successfully', 'success');
        fetchScoreHistory();
      })
      .catch(() => {
        message('Unable to delete score.', 'error');
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentScore({ ...currentScore, [name]: value });
  };
  useEffect(() => {
    editStaffById();
    fetchScoreHistory();
  }, [id]);

  return (
    <>
      <BreadCrumbs />
      <ToastContainer />

      {/* Staff Edit Buttons */}
      <StaffButton
        navigate={navigate}
        saveChanges={saveChanges}
        applyChanges={applyChanges}
        backToList={backToList}
        editStaffData={editStaffData}
        id={id}
      ></StaffButton>

      {/* KeyStaffDetails */}
      <BreadCrumbs heading={staffeditdetails && staffeditdetails.score_management_id} />
      <KeyStaffDetails
        staffeditdetails={staffeditdetails}
        handleInputs={handleInputs}
      ></KeyStaffDetails>

      {/* Picture Attachment */}
      <Form>
        <FormGroup>
          {/* Nav tab */}
          <ComponentCard title="More Details">
            <ToastContainer></ToastContainer>
            <Tab toggle={toggle} tabs={tabs} />

            <TabContent className="p-4" activeTab={activeTab}>
              <TabPane tabId="1">
                <Button
                  color="primary"
                  onClick={() => {
                    setModalType('add');
                    setCurrentScore({
                      score_management_id:id,
                      question_id: '',
                      title: '',
                      review_status: '',
                      comments: '',
                      reviewer: ''
                    });
                    setIsModalOpen(true);
                  }}
                >
                  Add Score
                </Button>
                <Table bordered>
                  <thead>
                    <tr>
                      <th>Question ID</th>
                      <th>Title</th>
                      <th>Review Status</th>
                      <th>Comments</th>
                      <th>Reviewer</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scoreHistory.map((score) => (
                      <tr key={score.score_management_history_id}>
                        <td>{score.question}</td>
                        <td>{score.title}</td>
                        <td>{score.review_status}</td>
                        <td>{score.comments}</td>
                        <td>{score.reviewer}</td>
                        <td>
                          <Button
                            color="secondary"
                            onClick={() => {
                              setModalType('edit');
                              setCurrentScore(score);
                              setIsModalOpen(true);
                            }}
                          >
                            Edit
                          </Button>
                          </td><td>
                          <Button
                            color="danger"
                            onClick={() => handleDeleteScore(score.score_management_history_id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </TabPane>

              <TabPane tabId="2">
                <Form>
                  <FormGroup>
                    <Row>
                      <Col xs="12" md="3" className="mb-3">
                        <Button
                          className="shadow-none"
                          color="primary"
                          onClick={() => {
                            setRoomName('StaffPic');
                            setFileTypes(['JPG', 'JPEG', 'PNG', 'GIF']);
                            dataForPicture();
                            setAttachmentModal(true);
                          }}
                        >
                          <Icon.Image className="rounded-circle" width="20" />
                        </Button>
                      </Col>
                    </Row>
                    <AttachmentModalV2
                      moduleId={id}
                      attachmentModal={attachmentModal}
                      setAttachmentModal={setAttachmentModal}
                      roomName={RoomName}
                      fileTypes={fileTypes}
                      altTagData="Staff Data"
                      desc="Staff Data"
                      recordType="Picture"
                      mediaType={pictureData.modelType}
                    />
                    <ViewFileComponentV2 moduleId={id} roomName="StaffPic" recordType="Picture" />
                  </FormGroup>
                </Form>
              </TabPane>
            </TabContent>
          </ComponentCard>
        </FormGroup>
      </Form>

      {/* Add/Edit Modal */}
      <Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(!isModalOpen)}>
        <ModalHeader toggle={() => setIsModalOpen(!isModalOpen)}>
          {modalType === 'add' ? 'Add Score' : 'Edit Score'}
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
                <Label>Question ID</Label>
                <Input
                  type="select"
                  name="question_id"
                  onChange={handleInputChange}
                  value={currentScore.question_id}
                  // disabled={modalType === 'edit'}
                >
                  <option value="">Please Select</option>
                  {customername &&
                    customername.map((e) => {
                      return (
                        <option key={e.question_management_id} value={e.question_management_id}>
                          {e.question}
                        </option>
                      );
                    })}
                </Input>
              </FormGroup>
            <FormGroup>
              <Label>Title</Label>
              <input
                type="text"
                name="title"
                value={currentScore.title}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Review Status</Label>
              <input
                type="text"
                name="review_status"
                value={currentScore.review_status}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Comments</Label>
              <input
                type="text"
                name="comments"
                value={currentScore.comments}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Reviewer</Label>
              <input
                type="text"
                name="reviewer"
                value={currentScore.reviewer}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSaveScore}>
            Save
          </Button>
          <Button color="secondary" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default StaffEdit;
