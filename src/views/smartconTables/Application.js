import React from 'react';
import { Container, FormGroup, Input, Label, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/images/logos/Pioneer.png';

const ApplicationForm = () => {
  return (
    
    <Container className="pt-4" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="text-center mb-4">
        <img src={Logo} alt="Pioneers Logo" width="150" />
        <h5>Pioneers International Thought for Business Consulting</h5>
        <h6 style={{ color: 'red' }}>PIT</h6>
        <h5>APPLICATION FORM</h5>
      </div>
      <Table bordered className="application-form-table">
        <tbody>
          <tr>
            <td>Company Name</td>
            <td colSpan="6"><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>Company Representative Name</td>
            <td colSpan="6"><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>Legal Obligation</td>
            <td colSpan="6"><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>Company Address</td>
            <td colSpan="6"><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>Address one:</td>
            <td colSpan="3"><input type="text" className="form-control" /></td>
            <td >Scope:</td>
            <td colSpan="3"><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>Address Two:</td>
            <td colSpan="3"><input type="text" className="form-control" /></td>
            <td>Scope:</td>
            <td colSpan="3"><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>Temporary Site Address:</td>
            <td colSpan="3"><input type="text" className="form-control" /></td>
            <td>Scope:</td>
            <td colSpan="3"><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>Standard Applied (QMS, EMS, OHS or Integrated)</td>
            <td colSpan="6"><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>Contact Tel Number</td>
            <td colSpan="3"><input type="text" className="form-control" /></td>
            <td>Contact Email</td>
            <td colSpan="3"><input type="email" className="form-control" /></td>
          </tr>
          <tr>
            <td>Website</td>
            <td colSpan="3"><input type="text" className="form-control" /></td>
            <td>Area of Organization</td>
            <td colSpan="3"><input type="email" className="form-control" /></td>
          </tr>
       
        
          <tr>
            <td>Scope of Registration</td>
            <td colSpan="6"><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>Client Operations are multi-site</td>
            <td colSpan="6"><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>If Multi-site operations: All activities identified at different locations</td>
            <td colSpan="6"><input type="text" className="form-control" /></td>
          </tr>

          <tr>
            <td>Operational Processes involved in the Organization</td>
            <td colSpan="6"><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>Outsourced Processes</td>
            <td colSpan="6"><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>Type Of Organization</td>
            <td colSpan="6">
              <label htmlFor="manufacturing"><input type="checkbox" id="manufacturing" /> Manufacturing</label>{' '}
              <label htmlFor="govt-org"><input type="checkbox" id="govt-org" /> Govt. Organization</label>{' '}
              <label htmlFor="service"><input type="checkbox" id="service" /> Service</label>{' '}
              <label htmlFor="psu"><input type="checkbox" id="psu" /> PSU</label>{' '}
              <label htmlFor="others"><input type="checkbox" id="others" /> Others</label>
            </td>
          </tr>
          <tr>
            <td>Detail any Applicable Legislation and/or standards you work to</td>
            <td colSpan="6"><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>No. of working shift/No. of Employee</td>
            <td colSpan="6"></td>
          </tr>
          <tr>
            <td></td>
            <td>Permanent Employee</td>
            <td>Work from Home</td>
            <td>Contracted/Subcontracted Employee</td>
            <td>Part Time Employee</td>
            <td>Employee At temporary site</td>
            <td>Non Permanent Employee</td>
          </tr>
          <tr>
            <td>Working shift - 1</td>
            <td><input type="number" className="form-control" /></td>
            <td><input type="number" className="form-control" /></td>
            <td><input type="number" className="form-control" /></td>
            <td><input type="number" className="form-control" /></td>
            <td><input type="number" className="form-control" /></td>
            <td><input type="number" className="form-control" /></td>
          </tr>
          <tr>
            <td>Working shift - 2</td>
            <td><input type="number" className="form-control" /></td>
            <td><input type="number" className="form-control" /></td>
            <td><input type="number" className="form-control" /></td>
            <td><input type="number" className="form-control" /></td>
            <td><input type="number" className="form-control" /></td>
            <td><input type="number" className="form-control" /></td>
          </tr>
          <tr>
            <td>Working shift - 3</td>
            <td><input type="number" className="form-control" /></td>
            <td><input type="number" className="form-control" /></td>
            <td><input type="number" className="form-control" /></td>
            <td><input type="number" className="form-control" /></td>
            <td><input type="number" className="form-control" /></td>
            <td><input type="number" className="form-control" /></td>
          </tr>
          <tr>
            <td>Total</td>
            <td><input type="number" className="form-control" /></td>
            <td><input type="number" className="form-control" /></td>
            <td><input type="number" className="form-control" /></td>
            <td><input type="number" className="form-control" /></td>
            <td><input type="number" className="form-control" /></td>
            <td><input type="number" className="form-control" /></td>
          </tr>
          <tr>
            <td>Do you run shifts? If so please give employee breakdown and types of work carried out for each shift</td>
            <td colSpan="3"><input type="text" className="form-control" /></td>
            <td>If you operate on temporary sites (Non-permanent), please detail typical number of sites</td>
            <td colSpan="3"><input type="email" className="form-control" /></td>
          </tr>

          <tr>
            <td>EA Code if Known</td>
            <td colSpan="3"><input type="text" className="form-control" /></td>
            <td>Documentation Language</td>
            <td colSpan="3"><input type="email" className="form-control" /></td>
          </tr>

          <tr>
            <td>When do you expect to be ready for stage-1 assessment?</td>
            <td colSpan="3"><input type="text" className="form-control" /></td>
            <td>When do you expect to be ready for Stage-2 Assessment?</td>
            <td colSpan="3"><input type="email" className="form-control" /></td>
          </tr>

          <tr>
            <td>Have you used an external consultant or have you got any experience with Management Systems?</td>
            <td colSpan="6"><input type="text" className="form-control" /></td>
          </tr>

          <tr>
            <td>How did you hear about HEC?</td>
            <td colSpan="6"><input type="text" className="form-control" /></td>
          </tr>




         
     
        </tbody>
      </Table>
   
 
       <Table bordered className="application-form-table">
       <thead>
    
    <tr>
      <th colSpan="2" style={{ textAlign: 'center' }}>
      Please complete this section for Integrated Management System Certification      </th>
    </tr>
  </thead>
         <tbody>
         <tr >
             <td >Is your IMS an integrated documentation set, including work instructions to a good level of development:</td>
             <td >
               <FormGroup check>
                 <Label check>
                   <Input type="radio" name="imsDocumentation" value="Yes" /> Yes
                 </Label>
               </FormGroup>
               <FormGroup check>
                 <Label check>
                   <Input type="radio" name="imsDocumentation" value="No" /> No
                 </Label>
               </FormGroup>
             </td>
           </tr>
 
           <tr>
             <td>Do your Management Reviews consider the overall business strategy and plan across all standards:</td>
             <td>
               <FormGroup check>
                 <Label check>
                   <Input type="radio" name="managementReviews" value="Yes" /> Yes
                 </Label>
               </FormGroup>
               <FormGroup check>
                 <Label check>
                   <Input type="radio" name="managementReviews" value="No" /> No
                 </Label>
               </FormGroup>
             </td>
           </tr>
 
           <tr>
             <td>Do you have an integrated approach to internal audits:</td>
             <td>
               <FormGroup check>
                 <Label check>
                   <Input type="radio" name="internalAudits" value="Yes" /> Yes
                 </Label>
               </FormGroup>
               <FormGroup check>
                 <Label check>
                   <Input type="radio" name="internalAudits" value="No" /> No
                 </Label>
               </FormGroup>
             </td>
           </tr>
 
           <tr>
             <td>Do you have an integrated approach to policy and objectives:</td>
             <td>
               <FormGroup check>
                 <Label check>
                   <Input type="radio" name="policyObjectives" value="Yes" /> Yes
                 </Label>
               </FormGroup>
               <FormGroup check>
                 <Label check>
                   <Input type="radio" name="policyObjectives" value="No" /> No
                 </Label>
               </FormGroup>
             </td>
           </tr>
 
           <tr>
             <td>Do you have an integrated approach to systems processes:</td>
             <td>
               <FormGroup check>
                 <Label check>
                   <Input type="radio" name="systemProcesses" value="Yes" /> Yes
                 </Label>
               </FormGroup>
               <FormGroup check>
                 <Label check>
                   <Input type="radio" name="systemProcesses" value="No" /> No
                 </Label>
               </FormGroup>
             </td>
           </tr>
 
           <tr>
             <td>
               Do you have an integrated approach to improvement mechanisms (corrective and preventive action; measurement and continual Improvement):
             </td>
             <td>
               <FormGroup check>
                 <Label check>
                   <Input type="radio" name="improvementMechanisms" value="Yes" /> Yes
                 </Label>
               </FormGroup>
               <FormGroup check>
                 <Label check>
                   <Input type="radio" name="improvementMechanisms" value="No" /> No
                 </Label>
               </FormGroup>
             </td>
           </tr>
 
           <tr>
             <td>Do you have Integrated management support and responsibilities:</td>
             <td>
               <FormGroup check>
                 <Label check>
                   <Input type="radio" name="managementSupport" value="Yes" /> Yes
                 </Label>
               </FormGroup>
               <FormGroup check>
                 <Label check>
                   <Input type="radio" name="managementSupport" value="No" /> No
                 </Label>
               </FormGroup>
             </td>
           </tr>
 
           <tr>
             <td>Please confirm the preferred language for the conduct of the audit</td>
             <td>
               <Input type="text" name="preferredLanguage" defaultValue="ENGLISH" />
             </td>
           </tr>
         </tbody>
         </Table>
 
       <p className="mt-4">
         * The effective number of personnel consists of all personnel (permanent, temporary, and part-time) involved within the scope of certification including those working on each shift. When included within the scope of certification, it shall also include contractors/subcontractors’ personnel performing work or work-related activities that are under the control or influence of the organization, that can impact on the organization’s Management System performance.
       </p>
       <Table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
  <thead>
    
    <tr>
      <th colSpan="2" style={{ textAlign: 'center' }}>
        Please complete this section for ISO 14001 Applications
      </th>
    </tr>
  </thead>
  <tbody>
  <tr>
            <td>Please summarise the significant Environmental Aspects that you have identified</td>
            <td colSpan="12"><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>Please detail any Environmental legal requirements related to your company activity</td>
            <td colSpan="12"><input type="text" className="form-control" /></td>
          </tr>
    
  </tbody>
</Table>
<Table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
  <thead>
    
    <tr>
      <th colSpan="2" style={{ textAlign: 'center' }}>
      Please complete this section for OHSAS 18001/ISO 45001 Applications
       </th>
    </tr>
  </thead>
  <tbody>
  <tr>
            <td>Please summarise the significant Hazards that you have identified</td>
            <td colSpan="12"><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>Please summarise the significant Hazards that you have identified</td>
            <td colSpan="12"><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>Please detail any OH&S legal requirements related to your company activity</td>
            <td colSpan="12"><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>Do you recognise any Union(s), if so please give details</td>
            <td colSpan="12"><input type="text" className="form-control" /></td>
          </tr>
  </tbody>
</Table>

<Table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
  <thead>
    <tr>
      <th colSpan="4" style={{ textAlign: 'left', padding: '10px' }}>
        Please provide accident statistics for last two years and current year to date.
      </th>
    </tr>
    <tr>
      <th style={{ padding: '10px' }}>Type</th>
      <th style={{ padding: '10px' }}>Current year:</th>
      <th style={{ padding: '10px' }}>Previous year:</th>
      <th style={{ padding: '10px' }}>2 years ago:</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ padding: '10px' }}>Major accidents/legal action</td>
      <td style={{ padding: '10px' }}><input type='text'></input></td>
      <td style={{ padding: '10px' }}><input type='text'></input></td>
      <td style={{ padding: '10px' }}><input type='text'></input></td>
    </tr>
    <tr>
      <td style={{ padding: '10px' }}>Over seven days absences because of an incident</td>
      <td style={{ padding: '10px' }}><input type='text'></input></td>
      <td style={{ padding: '10px' }}><input type='text'></input></td>
      <td style={{ padding: '10px' }}><input type='text'></input></td>
    </tr>
    <tr>
      <td style={{ padding: '10px' }}>Dangerous occurrences</td>
      <td style={{ padding: '10px' }}><input type='text'></input></td>
      <td style={{ padding: '10px' }}><input type='text'></input></td>
      <td style={{ padding: '10px' }}><input type='text'></input></td>
    </tr>
    <tr>
      <td style={{ padding: '10px' }}>Accidents/Incidents – minor not requiring hospital treatment</td>
      <td style={{ padding: '10px' }}><input type='text'></input></td>
      <td style={{ padding: '10px' }}><input type='text'></input></td>
      <td style={{ padding: '10px' }}><input type='text'></input></td>
    </tr>
  </tbody>
</Table>
<Table bordered className="application-form-table">
  <thead>
  <tr>
      <th colSpan="4" style={{ textAlign: 'left', padding: '10px' }}>
      Please complete this section for ISO 27001:2013 Applications
      </th>
    </tr>
  </thead>
        <tbody>
          <tr>
            <td>Please list the ISO 27001 Annex A control objectives and controls that are justified as exclusions</td>
            <td colSpan="6"><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>Number of system users</td>
            <td colSpan="6"><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>Number of servers</td>
            <td colSpan="6"><input type="text" className="form-control" /></td>
      </tr>
      <tr>
            <td>Number of workstations</td>
            <td colSpan="6"><input type="text" className="form-control" /></td>
          </tr><tr>
            <td>Number of application development and maintenance staff</td>
            <td colSpan="6"><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>Date of Application :</td>
            <td colSpan="6"><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>Signature of Representative:</td>
            <td colSpan="6"><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>Provide details of Network and encryption technology in use as part of the ISMS</td>
            <td colSpan="6"><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>Please detail any Information security legal requirements related to your company activity</td>
            <td colSpan="6"><input type="text" className="form-control" /></td>
          </tr>
          </tbody>
          </Table>
    </Container>

  );
};

export default ApplicationForm;
