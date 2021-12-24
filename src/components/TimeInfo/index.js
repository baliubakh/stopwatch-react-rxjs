import React from 'react';
//Styles
import './index.css';

const TimeInfo = ({ seconds }) => {
  return (
    <div>
      <p className="title">StopWatch</p>
      <span className="span">
        {seconds && Math.floor(seconds / 3600) < 10
          ? '0' + Math.floor(seconds / 3600)
          : Math.floor(seconds / 3600)}
      </span>
      <span>
        {seconds && Math.floor(seconds / 60) < 10
          ? '0' + Math.floor(seconds / 60)
          : Math.floor(seconds / 60)}
      </span>
      <span>
        {seconds && Math.floor(seconds % 60) < 10
          ? '0' + Math.floor(seconds % 60)
          : Math.floor(seconds % 60)}
      </span>
    </div>
  );
};

export default TimeInfo;
