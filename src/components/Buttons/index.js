import React from 'react';
//Styles
import './index.css';

const Buttons = ({ handleStart, handleStop, handleWait, handleReset }) => {
  return (
    <div>
      <button onClick={handleStart} className="start-btn">
        Start
      </button>
      <button onClick={handleStop} className="stop-btn">
        Stop
      </button>
      <button onClick={handleWait} className="wait-btn">
        Wait
      </button>
      <button onClick={handleReset} className="reset-btn">
        Reset
      </button>
    </div>
  );
};

export default Buttons;
