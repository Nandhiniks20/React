import React, { useEffect, useState, ChangeEvent } from 'react';
import './Dashboard.css';
import axios from 'axios';
import TextField from '@mui/material/TextField';

interface Team {
  team_name: string;
  players: any[];
}

interface Player {
  playername: string;
  age: string;
}

interface DataItem {
  game: string;
  teams: Team[];
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [inputSection1, setInputSection1] = useState<Player[]>([{ playername: "", age: "" }]);
  const [inputSection2, setInputSection2] = useState<Player[]>([{ playername: "", age: "" }]);
  const [inputSection3, setInputSection3] = useState<Player[]>([{ playername: "", age: "" }]);
  const [inputSection4, setInputSection4] = useState<Player[]>([{ playername: "", age: "" }]);
  const [visibleInputs, setVisibleInputs] = useState<number[]>([]);
  const [inputIndex, setInputIndex] = useState(5); // Start with the index after the initial data


  const [isSection2Editable, setIsSection2Editable] = useState(true);

  const apiurl = 'https://mocki.io/v1/b4544a37-0765-405f-baf6-6675845d5a0e';

  const fetchInfo = () => {
    return axios.get(apiurl).then((response) => {
      setData(response.data);
    });
  };

  const toggleButton = (index: number) => {
    setIsSection2Editable((prevIsSection2Editable) => !prevIsSection2Editable);
    setVisibleInputs((prevVisibleInputs) => {
      if (prevVisibleInputs.includes(index)) {
        return prevVisibleInputs.filter((item) => item !== index);
      } else {
        return [...prevVisibleInputs, index];
      }
    });
  };
  //handle save
  const handleSave = (teamIndex: number, inputIndex: number) => {
    const savedData = [...data];
    const inputValue = savedData[teamIndex]?.teams[teamIndex]?.players[3 + inputIndex];
    console.log(`Saved data for team ${teamIndex}, player ${3 + inputIndex}:`, inputValue);  
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    teamIndex: number,
    inputIndex: number,
  ): void => {
    const { value } = e.target;
    const newData = [...data];
    newData[teamIndex].teams[teamIndex].players[3 + inputIndex] = value;
    setData(newData);
  };


  const handleChange1 = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    i: number,
    fieldName: keyof Player
  ): void => {
    if (isSection2Editable) {
      const { value } = e.target;
      setInputSection1((prevInput) => {
        const newInput = [...prevInput];
        newInput[i][fieldName] = value;
        return newInput;
      });
      console.log('input is changing');
    }
  };
  const handleChange2 = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    i: number,
    fieldName: keyof Player
  ): void => {
    if (isSection2Editable) {
      const { value } = e.target;
      setInputSection2((prevInput) => {
        const newInput = [...prevInput];
        newInput[i][fieldName] = value;
        return newInput;
      });
      console.log('input is changing');
    }
  };
  const handleChange3 = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    i: number,
    fieldName: keyof Player
  ): void => {
    if (isSection2Editable) {
      const { value } = e.target;
      setInputSection3((prevInput) => {
        const newInput = [...prevInput];
        newInput[i][fieldName] = value;
        return newInput;
      });
      console.log('input is changing');
    }
  };
  const handleChange4 = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    i: number,
    fieldName: keyof Player
  ): void => {
    if (isSection2Editable) {
      const { value } = e.target;
      setInputSection4((prevInput) => {
        const newInput = [...prevInput];
        newInput[i][fieldName] = value;
        return newInput;
      });
      console.log('input is changing');
    }
  }


  const handleAddSection1 = () => {
    const lastSet = inputSection1[inputSection1.length - 1];
    const isLastSetFilled = lastSet.playername !== "" && lastSet.age !== "";

    if (isLastSetFilled) {
      console.log('Add Section 1');
      setInputSection1([...inputSection1, { playername: "", age: "" }]);
    }
  };

  const handleAddSection2 = () => {
    const lastSet = inputSection2[inputSection2.length - 1];
    const isLastSetFilled = lastSet.playername !== "" && lastSet.age !== "";

    if (isLastSetFilled) {
      console.log('Add Section 2');
      setInputSection2([...inputSection2, { playername: "", age: "" }]);
    }
  };

  const handleAddSection3 = () => {
    const lastSet = inputSection3[inputSection3.length - 1];
    const isLastSetFilled = lastSet.playername !== "" && lastSet.age !== "";

    if (isLastSetFilled) {
      console.log('Add Section 3');
      setInputSection3([...inputSection3, { playername: "", age: "" }]);
    }
  };

  const handleAddSection4 = () => {
    const lastSet = inputSection4[inputSection4.length - 1];
    const isLastSetFilled = lastSet.playername !== "" && lastSet.age !== "";

    if (isLastSetFilled) {
      console.log('Add Section 4');
      setInputSection4([...inputSection4, { playername: "", age: "" }]);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div>
      <p>This is the dashboard</p>
      <div className="container">
        {data.map((dataObj, index) => (
          <div key={index} className="element-container">
            <div className="thick-border">
              <p className="game"><b>{dataObj.game}</b></p>
            </div>
            <div className="teams">
              {dataObj.teams.map((dataObj2, index2) => (
                <div key={index2} className="team-container">
                  <p className="team"><b>{dataObj2.team_name}({dataObj2.players.length})</b></p>
                  {dataObj2.players.slice(0, 3).map((player, playerIndex) => (
                    <div className='playersNamecontainer' key={playerIndex}>
                      <TextField
                        className='players'
                        placeholder="Type here"
                        value={player.name}
                        style={{backgroundColor:'#d7d9ec' }}
                        onChange={(e) => {
                          const newData = [...data];
                          newData[index].teams[index2].players[playerIndex].name = e.target.value;
                          setData(newData);
                        }}
                      />
                    </div>
                  ))}
                  {dataObj2.players.slice(0, 3).map((player, playerIndex) => (
                    <div className='playersAgecontainer' key={playerIndex}>
                      <TextField
                        className='playersAge'
                        placeholder="Type here"
                        style={{backgroundColor:'#d7d9ec' }}
                        value={player.age}
                        onChange={(e) => {
                          const newData = [...data];
                          newData[index].teams[index2].players[playerIndex].age = e.target.value;
                          setData(newData);
                        }}
                      />
                    </div>
                  ))}
                  {dataObj2.players.slice(0,3).map((player, playerIndex) =>(
                    (<div className='savebuttonContainer'> 
                      <button className='savebutton' style={{backgroundColor:'rgb(173, 147, 247)'}}>Save</button>
                    </div>
                    )
                  ))}
                  {dataObj2.players.length > 3 && (
                    <button
                      style={{ position: 'relative', backgroundColor:'#d7d9ec',left: '-250px', top: `-${15 * (dataObj2.players.length - 3)}px`, width: '18%', padding: '2px' }}

                      onClick={() => toggleButton(index2)}
                    >
                      toggle
                    </button>
                  )}
                
                  {visibleInputs.includes(index2) &&
                  dataObj2.players
                    .slice(3)
                    .map((inputValue, inputIndex) => (
                      <div key={inputIndex + 3} className="hidden-input-container">
                        <div className='playersNamecontainer' style={{position:'relative', top:'8cm', margin:'-14px'}}
 >
                          <TextField
                            className='players'
                            label="Player Name"
                            style={{backgroundColor:'#d7d9ec' }}
                            value={inputValue ? inputValue.name : ''}
                            onChange={(e) => handleChange(e, index2, inputIndex)}
                          />
                        </div>
                        <div className='playersAgecontainer'>
                          <TextField
                            className='playersAge' 
                            style={{position:'relative', top:'5.4cm', left:'100px', backgroundColor:'#d7d9ec' }}
                            label="Player Age"
                            value={inputValue ? inputValue.age : ''}
                            onChange={(e) => handleChange(e, index2, inputIndex)}
                          />
                        </div>
                        <div>                        
                          <button className='savebutton1' style={{position:'relative',left:'3cm',width:'14%', top:'5cm', padding:'17px', backgroundColor:'rgb(173, 147, 247)'}} onClick={() => handleSave(index2, inputIndex)}>Save</button>
                          
                        </div>

                      </div>
                    ))
                }
                
                  </div>
              ))}
            </div>
          </div>
        ))}
        <button className='button1' style={{ position: 'relative', top: '-56.6cm', left: '-177px', padding: '17px', backgroundColor:'rgb(173, 147, 247)' }} onClick={handleAddSection1}>
          Add
        </button>
        {inputSection1.map((val, i) => (
          <div key={i} style={{ position: 'relative', width: '230px', top: '-58cm', left: '104px' }}>
            <TextField
              style={{ width: '220px',backgroundColor:'#d7d9ec' }}
              name='playername'
              value={val.playername}
              onChange={(e) => handleChange1(e, i, 'playername')}
              label="Player Name"
              variant="outlined"
              fullWidth
              className='players'
            />
            <TextField
              style={{ width: '33%', top: '-55px', left: '167px',backgroundColor:'#d7d9ec' }}
              name='age'
              value={val.age}
              onChange={(e) => handleChange1(e, i, 'age')}
              label="Age"
              variant="outlined"
              fullWidth
              className='playersAge'
            />
          </div>
        ))}
        <button className='button2' style={{ position: 'relative', top: '-46.2cm', left: '-175px', padding: '17px', backgroundColor:'rgb(173, 147, 247)' }} onClick={handleAddSection2}>
          Add 
        </button>
        {inputSection2.map((val, i) => (
          <div className='inputSection2' key={i} style={{ position: 'relative', width: '230px', top: '-47.3cm', left: '100px',  }}>
            <TextField
              style={{ width: '220px',backgroundColor:'#d7d9ec', margin:'-10px'}}
              name='playername'
              value={val.playername}
              onChange={(e) => handleChange2(e, i, 'playername')}
              label="Player Name"
              variant="outlined"
              fullWidth
              className='players'
            />
            <TextField
              style={{ width: '33%', top: '-55px', left: '169px',backgroundColor:'#d7d9ec', margin:'6px' }}
              name='age'
              value={val.age}
              onChange={(e) => handleChange2(e, i, 'age')}
              label="Age"
              variant="outlined"
              fullWidth
              className='playersAge'
              disabled={!isSection2Editable}
            />
          </div>
        ))}
        <button className='button3' style={{ position: 'relative',top: '-34.8cm', left: '-176px', padding: '17px', backgroundColor:'rgb(173, 147, 247)' }} onClick={handleAddSection3}>
          Add
        </button>
        {inputSection3.map((val, i) => (
          <div key={i} style={{ position: 'relative', width: '230px', top: '-36.3cm', left: '100px', }}>
            <TextField
              style={{ width: '220px',backgroundColor:'#d7d9ec' }}
              name='playername'
              value={val.playername}
              onChange={(e) => handleChange3(e, i, 'playername')}
              label="Player Name"
              variant="outlined"
              fullWidth
              className='players'
            />
            <TextField
              style={{ width: '33%', top: '-55px', left: '168px',backgroundColor:'#d7d9ec' }}
              name='age'
              value={val.age}
              onChange={(e) => handleChange3(e, i, 'age')}
              label="Age"
              variant="outlined"
              fullWidth
              className='playersAge'
              disabled={!isSection2Editable}
            />
          </div>
        ))}
        <button className='button4' style={{ position: 'relative', top: '-24.2cm', left: '-174px', padding: '17px', backgroundColor:'rgb(173, 147, 247)' }} onClick={handleAddSection4}>
          Add
        </button>
        {inputSection4.map((val, i) => (
          <div key={i} style={{ position: 'relative', width: '230px', top: '-25.6cm', left: '101px' }}>
            <TextField
              style={{ width: '220px',backgroundColor:'#d7d9ec' }}
              name='playername'
              value={val.playername}
              onChange={(e) => handleChange4(e, i, 'playername')}
              label="Player Name"
              variant="outlined"
              fullWidth
              className='players'
            />
            <TextField
              style={{ width: '33%', top: '-55px', left: '170px',backgroundColor:'#d7d9ec' }}
              name='age'
              value={val.age}
              onChange={(e) => handleChange4(e, i, 'age')}
              label="Age"
              variant="outlined"
              fullWidth
              className='playersAge'
              disabled={!isSection2Editable}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
