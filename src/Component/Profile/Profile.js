import React from 'react'
import Photo from './LL_Photo.JPG'
import Resume from './Resume.pdf'

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
          <div>About me</div>
          <p>I am a second year Computer Science and Computational Mathematics student at 
            University of California, Santa Cruz. I am extremely interested in AI, machine learning,
            deep learning, data mining, and data analysis. My future career path is Machine Learning Engineer.
          </p>
          <p>
            <a href={Resume} download="Leon_Resume">Download My Resume</a>
          </p>
        </div>
      </div>
    </div>
  </div>
);
 
export default Profile