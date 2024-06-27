// ActiveQuestionnaires.js
import React from 'react';

const ActiveQuestionnaires = () => {
    const questionnaires = [
        {
          id: 1,
          title: 'Customer Satisfaction Survey',
          description: 'This survey is to assess customer satisfaction.',
          isActive: true,
        },
        {
          id: 2,
          title: 'Employee Feedback Form',
          description: 'This form is for collecting employee feedback.',
          isActive: true,
        },
        {
          id: 3,
          title: 'Product Feedback',
          description: 'Provide feedback on our new product.',
          isActive: false,
        },
      ];
  const activeQuestionnaires = questionnaires.filter(q => q.isActive);

  return (
    <div>
      <h4>Active Questionnaires</h4>
      {activeQuestionnaires.length > 0 ? (
        <ul>
          {activeQuestionnaires.map(q => (
            <li key={q.id}>
              <h4>{q.title}</h4>
              <p>{q.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No active questionnaires available.</p>
      )}
    </div>
  );
};

export default ActiveQuestionnaires;
