/*eslint-disable*/
import React, { useState } from 'react';
import ComponentCard from '../ComponentCard';

const IsoDashboard = ({ userId }) => {
  const [isoStandards, setIsoStandards] = useState([
    {id:1,name:'ISO 9000',description:'Quality Management'},
    {id:2,name:'ISO 22000',description:'Food Safety Management'},
    {id:3,name:'ISO 14001',description:'Environmental Management'},
    {id:4,name:'ISO 45000',description:'Occupational Health and Safety'},
    {id:5,name:'ISO 50000',description:'Energy Management'}
  ]);

//   useEffect(() => {
//     axios.get(`/api/user/${userId}/iso-standards`)
//       .then(response => {
//         setIsoStandards(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the ISO standards!', error);
//       });
//   }, [userId]);

  return (
    <ComponentCard title='ISO Codes'>
    <div>
      <h6>Your ISO Standards</h6>
      <ul>
        {isoStandards.map(standard => (
          <li key={standard.id}>
            <h6>{standard.name}</h6>
            <p>{standard.description}</p>
          </li>
        ))}
      </ul>
    </div>
    </ComponentCard>
  );
};

export default IsoDashboard;
