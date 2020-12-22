import React from 'react'
import Background from './Background.JPG'

const Welcome = () => (
  <div className="Welcome-Container">
    <img className="background_image" src={Background} alt="TreeBackground"></img>
    <div className="background__overlay">
      <div className="background__title">Welcome!</div>
      <p className="background__description">I'm Leon</p>
    </div>
  </div>
)

export default Welcome