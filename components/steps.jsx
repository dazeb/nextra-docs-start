import React from 'react';

const Steps = ({ children }) => (
  <div className="steps">
    {React.Children.map(children, (child, index) => (
      React.cloneElement(child, { stepNumber: index + 1 })
    ))}
  </div>
);

const Step = ({ stepNumber, title, children }) => (
  <div className="step">
    <div className="step-number">{stepNumber}</div>
    <div className="step-content">
      <h3>{title}</h3>
      {children}
    </div>
  </div>
);

Steps.Step = Step;

export default Steps;