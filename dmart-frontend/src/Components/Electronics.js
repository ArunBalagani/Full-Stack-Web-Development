
import React, { useState, useEffect } from "react";
import "../assets/styles/electronics.css";


    const Electronics = () => {
        const [electronics, setElectronics] = useState([]);
        const [displayedElectronics, setDisplayedElectronics] = useState([]);  

   
    const getElectronics = () => {
        fetch("https://fakestoreapi.com/products/category/electronics")
          .then((res) => res.json())
          .then((data) => {
            setElectronics(data);
            setDisplayedElectronics([data[0]]);
          })
          .catch((error) => console.error("Error fetching electronics:", error));
      };


    useEffect(() => {
        getElectronics();
      }, []);
    

    const handleViewAll = () => {
        setDisplayedElectronics(electronics); 
      };
      
    return (
        <div className="container">
        <div className="electronic-container">
          {displayedElectronics.map((electro, index) => (
            <div className="device-container" key={index}>
              <img src={electro.image} alt={electro.title} width="200px" height="200px" />
              <h2>{electro.title}</h2>
              <div>{electro.description}</div>
              <h3>Price: ${electro.price}</h3>
              <h3>Rating: {electro.rating.rate}</h3>
              <h3>{electro.rating.count} reviews</h3>
            </div>
          ))}
        </div>
        <button onClick={handleViewAll}>View All</button>
      </div>
    )
}

export default Electronics;