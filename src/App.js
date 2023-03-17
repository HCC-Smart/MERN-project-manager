import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import Projects from './components/Projects';
import ModalPopup from './components/modal';
import { useRecoilState } from 'recoil';
import { modalState } from './atom';

function App() {
  const [show, setShow] = useRecoilState(modalState);

  return (
  <>
<div className='container'>
<h1 className="text-center my-4  text-success ">Projects</h1>
        <div className="d-flex  justify-content-start mx-12">
        <button className="btn btn-success" onClick={()=> setShow(!show)}>Add new project</button>
       </div>
  <Projects/>
  <ModalPopup />
  </div> 
</>
 );
}

export default App;
