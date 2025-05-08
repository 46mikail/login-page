import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  
  const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/carts');
    const result = await response.json();
    setData(result.carts); 
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="card-grid">
          {data.map((item, index) => (
            <div className="card" key={index}>
              <h2>Cart ID: {item.id}</h2>
              <p>Total Products: {item.totalProducts}</p>
              <p>Total Amount: test {item.total}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
  
}

export default App;
