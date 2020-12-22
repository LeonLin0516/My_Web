import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <div className="Footer-Container">
    <h2>Contact</h2>
    <hr></hr>
    <div className="Contact">
      <a href="https://linkedin.com/in/leon-lin0516">
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
      </a>
      <p>https://linkedin.com/in/leon-lin0516</p>
    </div>
    <div className="Contact">
      <a href="mailto: llin52@ucsc.edu">
        <FontAwesomeIcon icon={faGoogle} className="icon" />
      </a>
      <p>llin52@ucsc.edu</p>
    </div>
    <div className="Contact">
      <a href="https://github.com/LeonLin0516">
        <FontAwesomeIcon icon={faGithub} className="icon" />
      </a>
      <p>https://github.com/LeonLin0516</p>
    </div>
  </div>
)

export default Footer