import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";


function APIDisplay() {

  return (
    <div>
      <p>Hit the button to get the goods</p>
      <input type="button"  />
      <APIComponent />
    </div>
  );
}



const APIComponent = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const url = `http://localhost:10000/api/test`;
    /*axios.get(url).then((response) => {
      const data = response.data
      setData(data);
    });*/ 

  }, []);

  return (
    <div>
      <h1>The title</h1>
      <h1>The data is.... {data}</h1>
    </div>
  );
};



function App() {
  return (
    <div>
      <APIDisplay />
    </div>
  );
}

export default App;
