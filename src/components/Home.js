import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useData } from './DataContext';
import Page2 from './Page2';
import './Page1.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import Battery90OutlinedIcon from '@mui/icons-material/Battery90Outlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import ClearIcon from '@mui/icons-material/Clear';


export const liveClick = () => {
    console.log('live')
}
const Page1 = () => {
    const [search, setSearch] = useState("");
    const { enteredText, setEnteredText } = useData();
    const {imageUrl, setImageUrl} = useData(""); // State to store image URL
    const currentTime1 = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: 'numeric' });
    const currentTime = currentTime1.replace(/\s[A-Za-z]*/, ' ')
    console.log(currentTime);
   
    const searchPressed = async () => {
        {/*checking text whether it is empty or not*/ }
        if (search === "") {
            console.log('no data')
        }
        else {
            setEnteredText(search); // Update enteredText state
            setImageUrl(`https://source.unsplash.com/random/200×100/?${search}`)
        }

    }

    

    return (
        <div className="App" style={{ backgroundColor: 'black' }}>

            <div className='App1'>
                <div className='main-div'>
                    <div className='nav-bar'>
                        <div className='box1' style={{
                            position: 'absolute',
                            width: '100px',
                            height: '25px',
                            borderRadius: '20px', // Adjust to control the roundness of corners
                            backgroundColor: 'black',
                            border: '1px solid #ccc',
                            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)', // Soft shadow effect
                            zIndex: 1, // Ensure the box1 div is on top
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer', // Add cursor pointer to indicate interactivity
                            left: '4.5cm',
                            top: '20px'
                        }}>

                        </div>
                        <div className="icons" style={{ position: 'absolute', top: '20px', left: '0.5cm' }}>
                            <SignalCellularAltIcon style={{ position: 'absolute', color: 'white', left: '8.4cm' }} />
                            <Battery90OutlinedIcon style={{ position: 'absolute', color: 'white', left: '10cm', transform: 'rotate(90deg)' }} />
                            <WifiOutlinedIcon style={{ position: 'absolute', color: 'white', left: '9.2cm' }} />
                            <p style={{ position: 'absolute', left: '1cm', color:'white' }}>{currentTime}</p>
                            <ClearIcon style={{ position: 'absolute', left: '35px', top: '70px', fontSize: '40px' }} />
                        </div>
                    </div>
                    <div className='box2'
                        style={{
                            position: 'absolute',
                            width: '4px',
                            height: '20px',
                            borderRadius: '2px',
                            backgroundColor: 'white',
                            left: '-0.167cm',
                            top: '4cm'
                        }}
                    >
                    </div>
                    <div className='box2'
                        style={{
                            position: 'absolute',
                            width: '4px',
                            height: '45px',
                            borderRadius: '2px',
                            backgroundColor: 'white',
                            left: '-5px',
                            top: '5cm'
                        }}>

                    </div>
                    <div className='box3'
                        style={{
                            position: 'absolute',
                            width: '4px',
                            height: '45px',
                            borderRadius: '2px',
                            backgroundColor: 'white',
                            left: '-5px',
                            top: '6.8cm'
                        }}>

                    </div >
                    <div className='box4' style={{
                        position: 'absolute',
                        width: '6px',
                        height: '70px',
                        backgroundColor: 'white',
                        backgroundRadius: '2px',
                        left: '12cm',
                        top: '6cm'
                    }}>

                    </div>
                    <Link to="/about">
                        <button className='Live-button' onClick={liveClick} style={{ position: 'absolute', borderRadius: '5px', border: 'none', width: '2cm', height: '30px', backgroundColor: 'rgb(247, 34, 116)', left: '9cm', top: '2.5cm' }}>
                            <h5 style={{ position: 'absolute', left: '22px', top: '-12px', color: 'white', fontSize: '12px' }}>LIVE</h5>
                        </button>
                    </Link>
                    {/* Search bar started */}
                    <div className='searchbar'>
                        {/* <LocationOnIcon onClick={searchPressed} style={{ position: 'absolute', left: '3.5cm', top: '3cm', color:'white' }} /> */}
                        <LocationOnIcon onClick={searchPressed} />

                        <input
                            type='text'
                            placeholder='CURRENT LOCATION'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            style={{ position: 'absolute', color: 'white', padding: '7px', background: 'transparent', border: 'none', outline: 'none' }}
                        />
                    </div>
                    {/* Search bar ended */}
                    {/* Entered location and image */}
                    <div>
                        <p className='weatherdata' style={{ position: 'absolute', top: '7.5cm', left: '2cm', fontSize: '1.2cm', whiteSpace: 'pre-line' }}>{enteredText.replace(/,/g, ',\n')}</p>
                        {imageUrl && <img src={imageUrl} alt="Location" style={{ width: '11.2cm', height: '18cm', marginTop: '10px', marginLeft: '10px', borderRadius: '50px 22px 0px 0px' }} />}
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Page1;