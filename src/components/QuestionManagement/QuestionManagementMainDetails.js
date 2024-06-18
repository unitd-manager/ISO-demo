import React, {useEffect, useState} from 'react';
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import ComponentCard from '../ComponentCard';

export default function QuestionmoreDetails({
  questionDetails,
  handleInputs,
  questionType,
  questionStatus,
  }) {
  QuestionmoreDetails.propTypes = {
    questionDetails: PropTypes.object,
    handleInputs: PropTypes.any,
    questionType: PropTypes.object,
    questionStatus: PropTypes.object,
      };

      const [question, setQuestion] = useState(questionDetails?.question_type || '');

  useEffect(() => {
    if (questionDetails) {
      setQuestion(questionDetails.question_type);
    }
  }, [questionDetails]);

  if (!questionDetails) {
    return null; // or you can return some loading indicator
  }
      
  return (
    <div>
   <ComponentCard title="Question details" creationModificationDate={questionDetails}>
            <ToastContainer></ToastContainer>
            <Row>
              <Col md="3">
                <FormGroup>
                  <Label> ISO Code </Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={questionDetails && questionDetails.iso_code}
                    name="iso_code"
                    disabled
                  />
                </FormGroup>
              </Col>
             
              <Col md="3">
                <FormGroup>
                  {/* Category title from Category table */}
                  <Label>Category</Label>
                  <Input
                    type="text"
                    name="category_title"
                    value={questionDetails && questionDetails.category_title}
                    onChange={handleInputs}
                    disabled
                  >
                  </Input>
                </FormGroup>
              </Col>

              <Col md="3">
                <FormGroup>
                  {/* Section title from section table */}
                  <Label>Question</Label>
                  <Input
                    type="text"
                    name="question"
                    value={questionDetails && questionDetails.question}
                    onChange={handleInputs}
                  >
                  </Input>
                </FormGroup>
              </Col>

              <Col md="3">
            <FormGroup>
              <Label>Question Type</Label>
              <Input
                type="select"
                onChange={(e) => {
                  handleInputs(e);
                  setQuestion(e.target.value);
                }}
                value={question || ''}
                name="question_type"
              >
                <option value="">Please Select</option>
                {questionType &&
                  questionType.map((e) => (
                    <option key={e.value} value={e.value}>
                      {e.value}
                    </option>
                  ))}
              </Input>
            </FormGroup>
          </Col>

          {question === 'MCQ' && (
            <>
              <Col md="3">
                <FormGroup>
                  <Label>Option 1</Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={questionDetails?.option_1 || ''}
                    name="option_1"
                  />
                </FormGroup>
              </Col>       
             

              <Col md="3">
                <FormGroup>
                  <Label>Option 2</Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={questionDetails && questionDetails.option_2}
                    name="option_2"
                  >
                  </Input>
                </FormGroup>
              </Col>

              <Col md="3">
                <FormGroup>
                  <Label>Option 3</Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={questionDetails && questionDetails.option_3}
                    name="option_3"
                  >
                  </Input>
                </FormGroup>
              </Col>


              <Col md="3">
                <FormGroup>
                  <Label>Option 4</Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={questionDetails && questionDetails.option_4}
                    name="option_4"
                  >
                  </Input>
                </FormGroup>
              </Col>

              </>
          )}

              <Col md="3">
                <FormGroup>
                  {/* Section title from section table */}
                  <Label>Correct Answer</Label>
                  <Input
                    type="text"
                    name="correct_answer"
                    value={questionDetails && questionDetails.correct_answer}
                    onChange={handleInputs}
                  >
                  </Input>
                </FormGroup>
              </Col>

              <Col md="3">
                <FormGroup>
                  {/* Section title from section table */}
                  <Label>Status</Label>
                  <Input
                    type="select"
                    name="status"
                    value={questionDetails && questionDetails.status}
                    onChange={handleInputs}
                  >
                    <option defaultValue="selected">Please Select</option>
                    {questionStatus &&
                      questionStatus.map((e) => {
                        return (
                          <option key={e.value} value={e.value}>
                            {e.value}
                          </option>
                        );
                      })}
                  </Input>
                </FormGroup>
              </Col>

            </Row>
          </ComponentCard>
    </div>
  );
}
