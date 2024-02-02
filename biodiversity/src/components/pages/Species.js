import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Link } from 'react-router-dom';
import db from './db.json';
import '../styles/Species.css';

const Species = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setcurrentPage] = useState(1);
  const itemsPage = 10;

  const handleChange = (e) => {
    setSearch(e.target.value);
    setcurrentPage(1);
  };

  return (
    <div className="speciesbody" style={{ backgroundColor: 'rgb(161, 206, 233)', color: 'black' }}>
      <div className="search">
        <TextField placeholder="search" onChange={handleChange} />
      </div>
      <div className="table-body">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Tamilname</th>
            </tr>
          </thead>
          <tbody>
            {db.filter((data) => {
              return search === '' ? true : (
                data.name.includes(search.toUpperCase()) ||
                data.tamilname.includes(search.toUpperCase())
              );
            })
              .map((data, index) => (
                <tr key={index}>
                  <td>{data.id}</td>
                  <td><Link to={`/species/${data.id}`} target="_blank">{data.name}</Link></td>
                  <td><Link to={`/species/${data.id}`} target="_blank">{data.tamilname}</Link></td>
                </tr>
              ))}
          </tbody>
        </table>
       </div>
    </div>
  );
}

export default Species;
