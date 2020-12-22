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
import './Component/Footer/Footer.css';
import Welcome from './Component/Welcome/Welcome';
import './Component/Welcome/Welcome.css';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Profile />
      <Experience />
      {/* <Abilities /> */}
      <Project />
      <Footer />
    </div>
  );
}

export default App;
