import { useNavigate } from 'react-router-dom';
import "./login.css"
import React, { useState } from 'react';
import blaster from "./blaster.jpg";



function FirstPage() {
  const navigate = useNavigate();
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');

  const handleNavigate = () => {
    navigate('/secondpage');
    setUserid('');
    setPassword('');
  };

  return (
  
    <div className="container">

      <div className="formbold-main-wrapper">
        <form>
           <div className="logo">
                    <style>{'body { background-color: black; }'}</style>
                            <img src={blaster} alt="blaster.jpg" />
              </div>
          <div className="heading">
                 <h3>SWARM CONTROL AUTOMOTIVE FLEET MANAGEMENT SOFTWARE</h3>
                <h2 class="topic">(SAMS)</h2>
                 <div className="formbold-input-flex">
              <div>
                     <input
                      type="text"
                      name="userid"
                      className="rounded-textbox"
                      onChange={(e) => setUserid(e.target.value)}
                      value={userid}
                    />
                    <label htmlFor="userid" className="rounded-label">
                      USER ID
                    </label>
                               </div>
             <div>
                    <input
                      type="text"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="rounded-textbox1"
                    />
                    <label htmlFor="password" className="rounded-label1">
                      {' '}
                      PASSWORD{' '}
                    </label>
                               </div>
      <button onClick={handleNavigate} class="formbold-btn">LOGIN</button>
                    </div>
                      </div>
                      </form>

                         </div>

                               </div>


  );
}

export default FirstPage;