import React, { useState } from 'react';
//Styles
import './index.css';

const ChangeThemeIcon = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleToogle = () => {
    setIsClicked((prev) => !prev);
  };
  if (isClicked) {
    document.body.classList.add('dark-theme');
    return <i className="far fa-sun toggle-icon" onClick={handleToogle}></i>;
  }
  document.body.classList.remove('dark-theme');
  return <i className="far fa-moon toggle-icon" onClick={handleToogle}></i>;
};

export default ChangeThemeIcon;
