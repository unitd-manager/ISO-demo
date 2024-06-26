import React from 'react';
import PropTypes from 'prop-types';
//import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

const BarChart = ({ answeredCount, unansweredCount, totalQuestion, correctCount }) => {
  const data = {
    labels: ['Answered', 'Unanswered', 'Total Questions', 'Correct Answers'],
    datasets: [
      {
        label: 'Counts',
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4CAF50'],
        borderColor: 'rgba(0,0,0,0.2)',
        borderWidth: 3,
        hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4CAF50'],
        hoverBorderColor: 'rgba(0,0,0,0.2)',
        data: [answeredCount, unansweredCount, totalQuestion, correctCount],
      },
    ],
  };

  return (
    <div>
      <h4>Score Summary</h4>
      <Doughnut data={data} />
    </div>
  );
};

// PropTypes definition
BarChart.propTypes = {
  answeredCount: PropTypes.number.isRequired,
  unansweredCount: PropTypes.number.isRequired,
  totalQuestion: PropTypes.number.isRequired,
  correctCount: PropTypes.number.isRequired,
};

export default BarChart;
