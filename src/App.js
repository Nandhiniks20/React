import image1 from './images/image1.png';
import image2 from './images/image2.png';
import './App.css';
import ReactPlayer from 'react-player';
import { MdSmartDisplay } from "react-icons/md";
import { TbClock } from "react-icons/tb";

import React, { useRef, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Questions from './components/Question';
import ATest from './components/Simple';




// function App() {
//   const playerRef = useRef(null);
//   const VIDEO_PATH = "https://40parables-assets.s3.amazonaws.com/bleat-AI-PulseCheck-Intro.mp4";


//   return (
//     <div className="App">
//       <header className="App-header">
//         <a href="https://assessment.churchtechtoday.com/static/media/logo-left.29d686a3ec1469294cf2.png" alt='logo'>
//         <img 
//         src={image1}       
//         className="App-logo"
//          alt="logo" >
//           </img>
//           </a>
//         <h1 className='h1'>AI Pluse Check</h1>
//         <img className="logo" src={image2} alt= 'image'/>
//       </header>
//       <main className='main'>
//           <div className="main-content">
//           <div className="main-content1">
//             <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} className='v1' />
//             <div className='contect-section'>
//             This assissment part
//           </div>
//           </div>        
//           </div>
//       </main>
//     </div>
//   );
// }

// export default App;
function App() {
  const playerRef = useRef(null);
  const VIDEO_PATH = "https://40parables-assets.s3.amazonaws.com/bleat-AI-PulseCheck-Intro.mp4";
  const[isPlaying, setisPlaying] = useState(false);

  const handlePlayVideo = () => {
    if (playerRef.current) {
      if(isPlaying) {
        playerRef.current.getInternalPlayer().pause(); // pause the video
      }
      else{
        playerRef.current.getInternalPlayer().play(); // play the video
      }
    }
    setisPlaying(!isPlaying);
  };
  

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <a href="https://assessment.churchtechtoday.com/static/media/logo-left.29d686a3ec1469294cf2.png" alt='logo'>
          <img 
            src={image1}       
            className="App-logo"
            alt="logo"
          />
        </a>
        <h1 className='h1'>AI Pluse Check</h1>
        <img className="logo" src={image2} alt='image' />
      </header>
      <main className='main'>
        <div className="main-content">
          <div className="main-content1">
            <div className="video">
              <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} className='v1'  />
            </div>
            <div className='content-section'>
              <div className="bottun-section">              
              <button className="button"onClick={handlePlayVideo}>
              <MdSmartDisplay style={{position:'absolute', width:'150%', height:'145%', top:'-7px', left:'-130px'}} />
               Watch Video</button>
              </div>
              <div className="bottun-section1">
              <h2>Is your church embracing impact <b style={{color:'black'}}>or AI* hesitant?</b></h2> 
              <ul>
                <li>1. Take this 3-minute assessment</li>
                <li>2. Invite your team to take it too after you do</li>
                <li>3. View everyone's results on 1 dashboard</li>
                <li>4. Align on the best next step for your church's approach to AI</li>
                <Link  to="/questions">
                <button className='get-button' >GET STARTED</button>
                </Link>
                <TbClock style={{position:'relative',left:'5.4cm', top:'28px', fontSize:'80%'}}/>
                <p style={{position:'absolute',left:'7.2cm', top:'6.9cm', fontSize:'80%', color:'black'}}>3 min</p>
                <p className='artifical'>*Artificial Intelligence</p>
                <p className='para'><b>If you aren't a Senior/Lead/Executive Pastor,</b> please ask one of them on your team to first take this test - ctt1.bleat.church. That test's result will generate a team link so you and other team members can then take this same test afterward as a team.</p>
                </ul> 
                </div>
            </div>
          </div>

        </div>
      </main>
      

    </div>
    <Routes>
          <Route path="/questions" element={<Questions />} />
        </Routes>
    </Router>

  );
}
export default App;

