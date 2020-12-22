import React, { Component } from 'react';
import './App.css';
import Profile from './Component/Profile/Profile';
import './Component/Profile/Profile.css';
import Experience from './Component/Experience/Experience';
import './Component/Experience/Experience.css'
import Abilities from './Component/Abilities/Abilities';
import './Component/Abilities/Abilities.css';
import Project from './Component/Project/Project';
import './Component/Project/Project.css';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Profile />
      <Experience />
      {/* <Abilities /> */}
      <Project />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
