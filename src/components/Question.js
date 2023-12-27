import ProgressBar from 'react-bootstrap/ProgressBar';
import React, { useState } from 'react';
import './Questions.css';
import { Link } from 'react-router-dom';


const Questions = () => {
  const questions = [
    "Our church's ministry strategy is firm but flexible to accommodate unexpected game changers such as AI.",
    "Our leadership team knows of the potential risks and rewards of leveraging AI.",
    "Our leadership team understands the value of tapping experts to educate our staff about AI.",
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showNextButton, setShowNextButton] = useState(true);

  const [isprogress, setProgress] = useState(6);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setShowNextButton(false);
    }
  };
  const currentState = currentQuestion+1;
  const handlePrev = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion((prev) => prev - 1);
      setShowNextButton(true);

    }
  };
  const handleOptionClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setProgress((prevProgress) => prevProgress + 6);
      setShowNextButton(false);

    }
  };

  return (
    <div className="content">
      <div className="main-content1">
        <div className="progress-bar">
          <div className='bar-section'>
            <div className='bar'>
            <div className='bar-title' style={{ position: 'absolute', left: '5cm', top: '2cm' }}>
              STRONG
              <progress value={isprogress} className='progress1' max="30" style={{ position: 'absolute', left: '-1.2cm', top: '-30px' }}></progress>
              </div>
            </div>
            <div className='bar'>
              <div className='bar-title' style={{ position: 'absolute', left: '9.7cm', top: '2cm' }}> UNDERSTANDING</div>
              <progress value='0'  className='progress2'  style={{ position: 'absolute', left: '9.7cm', top: '45px' }}></progress>
            </div>
            <div className='bar'>
              <div className='bar-title' style={{ position: 'absolute', left: '16cm', top: '2cm' }}>APPLICATION</div>
              <progress value='0' max="24"  className='progress3'  style={{ position: 'absolute', left: '16cm', top: '45px'  }}></progress>
            </div>
            <div className='bar'>
              <div className='bar-title' style={{ position: 'absolute', left:'22cm', top: '2cm' }}>DIRECTION</div>
              <progress value='0' max="24"   className='progress2'  style={{ position: 'absolute', left: '22cm', top: '45px'  }}></progress>
            </div>
          
          </div>
        </div>
      </div>
      <div className="ques-slide">
        <div className="question">
          <p>{currentState+'/'+questions.length}</p>
          <p className={currentQuestion === 0 ? 'active' : ''}>{questions[currentQuestion]}</p>
        </div>
        <div className="slide-container" >
          <div className="slide-point">
            <div className='bulle-point' onClick={handleOptionClick} style={{ position: 'absolute', left: '1cm', top: '8cm', fontSize: '550%', cursor:'pointer' }}>.</div>
            <div className='bulle-point' onClick={handleOptionClick} style={{ position: 'absolute', left: '5cm', top: '8cm',fontSize: '550%', cursor:'pointer' }}>.</div>
            <div className='bulle-point' onClick={handleOptionClick} style={{ position: 'absolute', left: '9cm', top: '8cm', fontSize: '550%' }}>.</div>
            <div className='bulle-point' onClick={handleOptionClick} style={{ position: 'absolute', left: '13cm', top: '8cm', fontSize: '550%' }}>.</div>
            <div className='bulle-point' onClick={handleOptionClick} style={{ position: 'absolute', left: '18cm', top: '8cm', fontSize: '550%' }}>.</div>

       
          </div>
          <div className='labels'>
            <div className='label' onClick={handleOptionClick} style={{ position: 'absolute', left: '1cm' }}>Strongly Disagree</div>
            <div className='label' onClick={handleOptionClick} style={{ position: 'absolute', left: '5cm' }}>Disagree</div>
            <div className='label'onClick={handleOptionClick} style={{ position: 'absolute', left: '9cm' }}>Neutral</div>
            <div className='label' onClick={handleOptionClick} style={{ position: 'absolute', left: '13cm' }}>Agree</div>
            <div className='label'onClick={handleOptionClick} style={{ position: 'absolute', left: '18cm' }}>Strongly Agree</div>
            <Link to="/questions" className="prev" style={{position: 'absolute'}}  onClick={handlePrev}>
          <button className= 'button1'>{'<---'}Prev</button>
        </Link>
          </div>
          {showNextButton && (
          <button className="next" onClick={handleNext}>
           {'--->'} Next
          </button>
        )}

        </div>
       
      </div>
    </div>
  );
};

export default Questions;
