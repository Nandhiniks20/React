// DataContext.js
import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [enteredText, setEnteredText] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // State to store image URL


  return (
    <DataContext.Provider value={{ enteredText, setEnteredText, imageUrl, setImageUrl}}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

export default DataContext;
