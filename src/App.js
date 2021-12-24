import React, { useState, useEffect } from 'react';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
//Components
import TimeInfo from './components/TimeInfo';
import Buttons from './components/Buttons';
import ChangeThemeIcon from './components/ChangeThemeIcon';
//Styles
import './App.css';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  let lastClick = 0;
  useEffect(() => {
    const unsubscribe = new Subject();
    interval(1000)
      .pipe(takeUntil(unsubscribe))
      .subscribe(() => {
        if (isVisible) {
          setSeconds((prevState) => prevState + 1);
        }
      });
    return () => {
      unsubscribe.next();
      unsubscribe.complete();
    };
  }, [isVisible]);
  const handleStart = () => {
    setIsVisible(true);
  };
  const handleStop = () => {
    if (seconds !== 0 && isVisible !== false) {
      setIsVisible(false);
      setSeconds(0);
    }
  };
  const handleWait = () => {
    const t = new Date().getTime();
    if (isVisible !== false && t - lastClick < 300) {
      setIsVisible(false);
    }
    lastClick = t;
  };
  const handleReset = () => {
    if (seconds !== 0) {
      setIsVisible(false);
      setSeconds(0);
      setIsVisible(true);
    }
  };
  return (
    <div className="App">
      <ChangeThemeIcon />
      <div className="container">
        <TimeInfo seconds={seconds || '00'} />
        <Buttons
          handleStart={handleStart}
          handleStop={handleStop}
          handleWait={handleWait}
          handleReset={handleReset}
        />
      </div>
    </div>
  );
}

export default App;
