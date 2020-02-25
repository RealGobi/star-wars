import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

  const Modal = ({ children, movie, setCharacter }) => {

      useEffect(() => {  
        const arr = []; 
        movie.characters.map(char => {
          const fetchData = async () => {
            const response = await fetch(char); 
            const data = await response.json();
            arr.push(data)
            setCharacter(arr);
          }
          fetchData();
        })
      }, [])
    
    return(
    ReactDOM.createPortal(
      <div className="modal">
        {children}
      </div>,
      document.getElementById('modal-root')
    )
    )};

export default Modal;