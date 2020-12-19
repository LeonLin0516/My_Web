import React, { Component } from 'react'
import './App.css';
import Profile from './Component/Profile/Profile'
import Experience from './Component/Experience/Experience'
import Abilities from './Component/Abilities/Abilities'
import Project from './Component/Project/Project'

function App() {
  return (
    <div className="App">
      <Profile />
      <Experience />
      <Abilities />
      <Project />
    </div>
  );
}

export default App;
