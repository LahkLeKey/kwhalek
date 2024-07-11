import React from 'react';

interface TestCardProps {
  message: string;
}

const TestCard: React.FC<TestCardProps> = ({ message }) => {
  return (
    <div className="test-card">
      <header className="test-card-header">
        <img src="logo.svg" className="test-card-logo" alt="weeeeee" />
        <p>{message}</p>
        <a
          className="test-card-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Work in progress
        </a>
      </header>
    </div>
  );
};

export default TestCard;
