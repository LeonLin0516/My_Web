import React from 'react'
import Photo from './LL_Photo.JPG'

const Profile = () => (
  <div className="Profile-Container">
    <div className="Profile">
      <h2>Profile</h2>
      <p>Undergraduate Student at UCSC</p>
      <hr></hr>
      <div className="About">
        <div className="Pic">
          <img src={Photo} alt="Leon" width="150" height="200"></img>
        </div>
        <div className="About-Me">
          <h3>About me</h3>
          <p>Placeholder for a paragraph</p>
        </div>
      </div>
    </div>
  </div>
);
 
export default Profile