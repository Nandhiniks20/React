import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "./db.json";
import { TextField } from "@mui/material";
import image1 from './images/image1.jpg'
import video from './images/video.mp4'
import '../styles/SpeciesDetails.css'
const SpeciesDetail = () => {
  const [search, setSearch] = useState("");
  const [zoomlevel, setZoomlevel] = useState(1);

  const { id } = useParams();
  const species = db.find((data) => data.id === parseInt(id));
  

  if (!species) {
    return <div>Species not found</div>;
  }

  const handleZoomIn = ()=>{
    setZoomlevel((prevZoomlevel)=>Math.min(prevZoomlevel+0.1,3));
  }

  const handleZoomOut = ()=>{
    setZoomlevel((prevZoomlevel)=>Math.max(prevZoomlevel - 0.1,1))
  }
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const downloadImage = (imageUrl, imageName)=>{
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = imageName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  }

  return (
    <div >
      <div className="Speciesdata" style={{ backgroundColor: 'rgb(161, 206, 233)'}}>
      <div className="searchbar">
      <TextField placeholder="search" onChange={handleChange} />
      </div>
      <div className="contentbody">
      <div >
        <strong>ID:</strong> {species.id}
      </div>
      <div style={{ overflow: 'hidden', width: '300px', height: '300px' }}>
        <img className="image" src={image1} style={{ width: '80%', height: '60%', transform: `scale(${zoomlevel})` }}></img>
        <button className="download" onClick={()=>downloadImage(image1,image1)}> Download</button>
      </div>
      <div>
        <button className='zoomin' onClick={handleZoomIn}>Zoom In</button>
        <button className='zoomout' onClick={handleZoomOut}>Zoom Out</button>
      </div>
      <div>
      <video controls width="500" height="300">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
      <div>
        <strong>Name:</strong>{" "}
        {search ? species.name.includes(search.toUpperCase()) && species.name : species.name} 
      </div>
      <div>
        <strong>Tamilname:</strong>{" "}
        {search ? species.tamilname.includes(search.toUpperCase()) && species.tamilname : species.tamilname}
      </div>
      </div>
      </div>
    </div>
  );
};

export default SpeciesDetail;
