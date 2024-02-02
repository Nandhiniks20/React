import React from "react";
import insta from './insta.jpg'
import linkedin from './linkedin.png'
import '../styles/Contactinfo.css'
const Contactinfo = ()=>{
    return(
        <div className="main-container">
            <div className="phone">
            <h4>Phon no: </h4>
            <h4 className="phoneno"> 44-34542137</h4>
            </div>
            <div className="mail">
            <h4 >email:</h4>
            <h4 className="maildata"> example123@gmail.com</h4>
            </div>
            <div className="insta">
            <h4>Instagram: 
            <img className="instapic" src={insta} alt='instagram'></img>
            </h4>
            </div>
            <div className="'linkedin">
            <h4>LinkedIn: 
            <img className="linkedinpic" src={linkedin} alt='linkedin'></img>
            </h4>
            </div>
            
        </div>
    )
}
export default Contactinfo;