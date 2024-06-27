/*eslint-disable*/
import React, { useState } from 'react';
import ComponentCard from '../ComponentCard';

const IsoDashboard = ({ userId }) => {
  const [isoStandards, setIsoStandards] = useState([
    {id:1,name:'ISO1000',description:'Quality'},
    {id:2,name:'ISO1001',description:'Assurance'},
    {id:3,name:'ISO1002',description:'Service'},
    {id:4,name:'ISO1003',description:'product'}
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
      <h4>Your ISO Standards</h4>
      <ul>
        {isoStandards.map(standard => (
          <li key={standard.id}>
            <h4>{standard.name}</h4>
            <p>{standard.description}</p>
          </li>
        ))}
      </ul>
    </div>
    </ComponentCard>
  );
};

export default IsoDashboard;
