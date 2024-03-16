import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useData } from './DataContext';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import Battery90OutlinedIcon from '@mui/icons-material/Battery90Outlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShortTextIcon from '@mui/icons-material/ShortText';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import { liveClick } from './Home'
import image1 from './image1.png'

const Page2 = () => {
    const { enteredText, imageUrl } = useData();
    const [weather, setWeather] = useState({});
    const [selectedOption, setSelectedOption] = useState('');
    console.log(imageUrl);

    const currentTime1 = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: 'numeric' });
    const currentTime = currentTime1.replace(/\s[A-Za-z]*/, ' ')
    console.log(currentTime);

    //get current date,month and year
    const currentDate = new Date();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const month = monthNames[currentDate.getMonth()];
    const day = String(currentDate.getDate()).padStart(2, 0)
    const year = currentDate.getFullYear();

    const currentDate_month_year = `${month} ${day}, ${year}`



    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const renderContent = () => {
        try{
            const fahrenheitTemp = weather.days[14].temp;
            const celsiusTemp = (fahrenheitTemp - 32) / 1.8;
            const cond = weather.days[14].conditions
            if (selectedOption === 'lastMonth') {
                return (
                    //calculating temperature
    
                    <>
                        <p style={{ position: 'absolute', top: '-1.8cm', left: '-6.5cm' }}>{weather.days[14].precip}%</p>
                        <p style={{ position: 'absolute', top: '-1.8cm', left: '-2.5cm' }}>{weather.days[14].humidity}%</p>
                        <p style={{ position: 'absolute', top: '-1.9cm', left: '1cm' }}>{weather.days[14].windspeed} km/h</p>
                        <p style={{ position: 'absolute', left: '30px', top: '1.3cm', color: 'white' }}>{celsiusTemp.toFixed(2)}</p>
                        <p style={{ position: 'absolute', top: '-4.7cm', left: '-6.3cm', color: 'white' }}>{celsiusTemp.toFixed(2)}</p>
                        <p style={{ position: 'absolute', top: '-4.7cm', left: '-4.5cm', color: 'white' }}>{celsiusTemp.toFixed(2)}</p>
                        <p style={{ position: 'absolute', top: '-4.7cm', left: '-2.4cm', color: 'white' }}>{celsiusTemp.toFixed(2)}</p>
                        <p style={{ position: 'absolute', top: '-4.7cm', left: '-0.6cm', color: 'white' }}>{celsiusTemp.toFixed(2)}</p>
                        <p style={{ position: 'absolute', top: '-4.7cm', left: '1.3cm', color: 'white' }}>{celsiusTemp.toFixed(2)}</p>
                        <p style={{ position: 'absolute', top: '-7.7cm', left: '-6cm', color: 'black' }}>{cond}</p>
                    </>
                );
            } else if (selectedOption === 'today') {
                const fahrenheitTemp = weather.days[0].temp;
                const celsiusTemp = (fahrenheitTemp - 32) / 1.8;
                const cond = weather.days[0].conditions

                return (
                    <>
                        <p style={{ position: 'absolute', top: '-1.84cm', left: '-6.5cm' }}>{weather.days[0].precip}%</p>
                        <p style={{ position: 'absolute', top: '-1.8cm', left: '-2.5cm' }}>{weather.days[0].humidity}%</p>
                        <p style={{ position: 'absolute', top: '-1.8cm', left: '1cm' }}>{weather.days[0].windspeed} km/h</p>
                        <p style={{ position: 'absolute', left: '30px', top: '1.3cm', color: 'white' }}>{celsiusTemp.toFixed(2)}</p>
                        <p style={{ position: 'absolute', top: '-4.7cm', left: '-6.3cm', color: 'white' }}>{celsiusTemp.toFixed(2)}</p>
                        <p style={{ position: 'absolute', top: '-4.7cm', left: '-4.5cm', color: 'white' }}>{celsiusTemp.toFixed(2)}</p>
                        <p style={{ position: 'absolute', top: '-4.7cm', left: '-2.4cm', color: 'white' }}>{celsiusTemp.toFixed(2)}</p>
                        <p style={{ position: 'absolute', top: '-4.7cm', left: '-0.6cm', color: 'white' }}>{celsiusTemp.toFixed(2)}</p>
                        <p style={{ position: 'absolute', top: '-4.7cm', left: '1.3cm', color: 'white' }}>{celsiusTemp.toFixed(2)}</p>
                        <p style={{ position: 'absolute', top: '-7.7cm', left: '-6cm', color: 'black' }}>{cond}</p>
                    </>
                )
            } else {
                return null;
            }
        }
        catch{
            console.log('no data')
        }
        
    };
    //fetching data from api
    // const api = {
    //          key: "7ac43bf5e5cc95db0abb07be71591cb7",
    //          base: "https://api.openweathermap.org/data/2.5/",      
    //     }
    //     const temperature = []
    //     fetch(`${api.base}weather?q=${enteredText}&units=metric&APPID=${api.key}`)


    const fetchData = () => {
        fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${enteredText}?unitGroup=us&key=K5YWJM5KQKDXTD8HPPTCASHWD`)
            .then((res) => res.json())
            .then((result) => {
                setWeather(result);
            })
            .catch((error) => {
                console.error('Error fetching weather data:', error);
            });
    };

    useEffect(() => {
        if (!enteredText) return;
        fetchData();
    }, [enteredText]);

    return (
        <div className='App'>
            <div className='App1'>
                <div className='main-div'>

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
                    <div className='main-div2' style={{ position: 'absolute', backgroundColor: 'white', width: '11cm', height: '18.5cm', top: '10px', left: '20px', borderRadius: '50px 22px 0px 0px' }}>
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
                            <div className="icons1" style={{ position: 'absolute', top: '20px', left: '0.3cm' }}>
                                <SignalCellularAltIcon style={{ position: 'absolute', color: 'black', left: '8.4cm' }} />
                                <Battery90OutlinedIcon style={{ position: 'absolute', color: 'black', left: '10cm', transform: 'rotate(90deg)' }} />
                                <WifiOutlinedIcon style={{ position: 'absolute', color: 'black', left: '9.2cm' }} />
                                <p style={{ position: 'absolute', left: '1cm', top: '-10px' }}>{currentTime}</p>
                                <ShortTextIcon style={{ position: 'absolute', top: '1.3cm', fontSize: '30px' }} />
                                <input style={{ position: 'absolute', color: 'black', left: '6cm', top: '1.4cm',border:'1px solid transparent'}}/>
                                <SearchIcon 
                                style={{ position: 'absolute', top: '1.3cm', fontSize: '30px', left: '9.5cm' }}
                                
                                />

                            </div>
                        </div>

                        <div className="image-container" >
                            {imageUrl && <img src={imageUrl} alt="Location" style={{ position: 'absolute', width: '3.8cm', height: '4cm', left: '6.8cm', top: '3.5cm', borderRadius: '28px 30px 28px 30px' }} />}
                            <p className='Location' style={{ position: 'absolute', top: '2.5cm', left: '15px', fontSize: '30px', whiteSpace: 'pre-line' }}>{enteredText.replace(/,/g, ',\n')}</p>
                            <p style={{ position: 'absolute', left: '20px', top: '5.4cm' }}>{currentDate_month_year}</p>
                            {/* <p style={{ position: 'absolute', left: '40px', top: '6cm' }}>{weather.currentConditions.conditions}</p> */}
                            <FilterDramaIcon style={{ position: 'absolute', left: '10px', top: '6.4cm', color: 'skyblue' }} />
                            <FilterDramaIcon style={{ position: 'absolute', left: '17px', top: '6.6cm', color: 'skyblue' }} />
                        </div>
                        <Link to="/">
                            <button onClick={liveClick} style={{ position: 'absolute', borderRadius: '5px', border: 'none', width: '1.5cm', height: '30px', backgroundColor: 'rgb(247, 34, 116)', left: '8.9cm', top: '6.3cm' }}>
                                <h5 style={{ position: 'absolute', left: '15px', top: '-12px', color: 'white', fontSize: '12px' }}>LIVE</h5>
                            </button>
                        </Link>

                    </div>

                    {/* <Link to="/">Page1</Link> */}
                    <div className="weatherreport" style={{ position: 'absolute', width: '10cm', height: '2.5cm', backgroundColor: 'rgb(24, 63, 85)', top: '8cm', left: '1cm', borderRadius: '20px' }}>
                        <p style={{ position: 'absolute', left: '30px', top: '-10px', color: 'white' }}>12.00</p>
                        <p style={{ position: 'absolute', left: '2.6cm', top: '-10px', color: 'white' }}>12.00</p>
                        <p style={{ position: 'absolute', left: '4.5cm', top: '-10px', color: 'white' }}>12.00</p>
                        <p style={{ position: 'absolute', left: '6.5cm', top: '-10px', color: 'white' }}>12.00</p>
                        <p style={{ position: 'absolute', left: '8.3cm', top: '-10px', color: 'white' }}>12.00</p>

                        <FilterDramaIcon style={{ position: 'absolute', left: '30px', top: '0.8cm', color: 'white' }} />
                        <FilterDramaIcon style={{ position: 'absolute', left: '40px', top: '1cm', color: 'white' }} />
                        <ThunderstormIcon style={{ position: 'absolute', left: '2.6cm', top: '0.8cm', color: 'white' }} />
                        <WbSunnyIcon style={{ position: 'absolute', left: '4.5cm', top: '0.8cm', color: 'white' }} />
                        <FilterDramaIcon style={{ position: 'absolute', left: '4.8cm', top: '1cm', color: 'white' }} />
                        <WbSunnyIcon style={{ position: 'absolute', left: '6.5cm', top: '0.8cm', color: 'white' }} />
                        <FilterDramaIcon style={{ position: 'absolute', left: '8.3cm', top: '0.8cm', color: 'white' }} />
                        <FilterDramaIcon style={{ position: 'absolute', left: '8.6cm', top: '1cm', color: 'white' }} />

                    </div>
                    <div className="weather-report2" style={{ position: 'absolute', top: '11cm', left: '1cm', border: '1px  grey', width: '10cm', height: '2.3cm', borderRadius: '20px' }}>
                        <h3 style={{ position: 'absolute', color: 'black', top: '-20px' }}>Additional info</h3>
                        <p style={{ position: 'absolute', color: 'black', top: '10px', left: '5px' }}>Precipitation</p>
                        <p style={{ position: 'absolute', color: 'black', top: '10px', left: '170px' }}>Humidity</p>
                        <p style={{ position: 'absolute', color: 'black', top: '10px', left: '310px' }}>Windy</p>
                        <img src={image1} alt='image1' style={{ position: 'absolute', top: '3.8cm', width: '11cm', height: '160px', left: '-19px' }}></img>
                        <h4 style={{ position: 'absolute', top: '2cm', }}>Temperature</h4>
                        {/* <div style={{position:'absolute', border:'1px solid black', width:'3cm', height:'1cm', borderRadius:'10px',backgroundColor:'yellow', top:'3cm', left:'7cm', overflow: 'hidden'}} onClick={toggleDropdown}> */}
                        <div style={{ position: 'absolute', top: '3cm', left: '7cm' }} >
                            <ul style={{ position: 'absolute', left: '-30px', top: '-15px' }}>
                                <select style={{ position: 'absolute', width: '3cm', height: '1cm', borderRadius: '10px', backgroundColor: 'yellow', left: '0.8cm' }} onClick={handleChange}>
                                    <option value="lastMonth">last month</option>
                                    <option value="today">today</option>
                                </select>
                            </ul>
                            <div style={{ marginTop: '30px' }}>
                                {renderContent()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Page2;
