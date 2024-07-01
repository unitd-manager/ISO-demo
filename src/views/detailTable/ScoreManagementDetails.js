import React, { useState, useEffect, useContext } from 'react';
import { Row, Col, FormGroup, Label, Button, Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import api from '../../constants/api';
import message from '../../components/Message';
import creationdatetime from '../../constants/creationdatetime';
import AppContext from '../../context/AppContext';

const StaffDetails = () => {
  // All state variables

  const [staffdetails, setStaffDetails] = useState({company_id:'', iso_code_id:'',});
  const [customername, setCustomerName] = useState([]);
  const { loggedInuser } = useContext(AppContext);

  const getCustomerName = () => {
    api
      .get('/score/getCustomerName')
      .then((res) => {
        setCustomerName(res.data.data);
      })
      .catch(() => {
        message('Company not found', 'info');
      });
  };

  const [isoname, setIsoName] = useState([]);

  const getIsoName = () => {
    api
      .get('/score/getIsoName')
      .then((res) => {
        setIsoName(res.data.data);
      })
      .catch(() => {
        message('Iso not found', 'info');
      });
  };
  useEffect(() => {
    getCustomerName();
    getIsoName();
 
  }, []);
  // Navigation and Parameter Constants

  const navigate = useNavigate();

  //All Functions/Methods

  //Setting Data in Staff Details
  const handleInputs = (e) => {
    setStaffDetails({ ...staffdetails, [e.target.name]: e.target.value });
  };

  //Api call for Insert Staff Data
  const insertStaffData = () => {
    if (staffdetails.company_id !== '' && staffdetails.iso_code_id !== '') {
    staffdetails.creation_date = creationdatetime;
    staffdetails.created_by = loggedInuser.first_name;
      api
        .post('/score/insertScore', staffdetails)
        .then((res) => {
          const insertedDataId = res.data.data.insertId;
          message('Score Details inserted successfully.', 'success');
          setTimeout(() => {
            navigate(`/ScoreManagementEdit/${insertedDataId}`);
          }, 300);
        })
        .catch(() => {
          message('Unable to edit record.', 'error');
        });} else {
          message('Please fill all required fields.', 'warning');
        }
      };

  return (
    <div>
      <BreadCrumbs />
      <ToastContainer />
      <Row>
        <Col md="6" xs="12">
          <ComponentCard title="Score Details">
        
            <FormGroup>
              <Row>
              <Col md="12">
                <FormGroup>
                <Label>
                Company Name <span className='required'>*</span> </Label>
                  <Input
                    type="select"
                    onChange={handleInputs}
                    name="company_id"
                  >
                    <option defaultValue="selected">Please Select</option>
                    {customername &&
                      customername.map((e) => {
                        return (
                          <option key={e.company_id} value={e.company_id}>
                            {e.company_name}
                          </option>
                        );               
                      })}
                  </Input>
                </FormGroup>
              </Col>
              </Row>
            </FormGroup>
              
            <FormGroup>
              <Row>
              <Col md="12">
                <FormGroup>
                <Label>
                ISO Code <span className='required'>*</span></Label>
                  <Input
                    type="select"
                    onChange={handleInputs}
                    name="iso_code_id"
                  >
                    <option>Please Select</option>
                    {isoname &&
                      isoname.map((e) => {
                        return (
                          <option key={e.iso_code_id} value={e.iso_code_id}>
                            {e.iso_code}
                          </option>
                        );               
                      })}
                  </Input>
                </FormGroup>
              </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <div className="pt-3 mt-3 d-flex align-items-center gap-2">
                  <Button
                    color="primary"
                    type="button"
                    className="btn mr-2 shadow-none"
                    onClick={() => {
                      insertStaffData();
                    }}
                  >
                    Save & Continue
                  </Button>
                  <Button
                    type="submit"
                    className="btn btn-dark shadow-none"
                    onClick={(e) => {
                      if (window.confirm('Are you sure you want to cancel? ')) {
                        navigate('/ScoreManagement');
                      } else {
                        e.preventDefault();
                      }
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </Row>
            </FormGroup>
          </ComponentCard>
        </Col>
      </Row>
    </div>
  );
};

export default StaffDetails;
