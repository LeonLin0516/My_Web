import React from 'react';
import UCSC_Logo from './UCSC_Logo.png'
import Tech4Good_Logo from './Tech4Good.png'
import BSOE_Logo from './BSOE.png'

const Experience = () => (
  <div className="Experience-Container">

    <h2>Education</h2>
    <div className="container">
      <div>
        <img src={UCSC_Logo} alt="UCSC Logo" width="150" height="150"></img>
      </div>
      <div className="description">
        <p className="title">University of California, Santa Cruz</p>
        <p className="subtitle">Computer Science (B.S.), Computational Mathematics (B.A.)</p>
        <p className="body">
          UCSC presented unprecedented scale and diversity of opportunity. Professors across the disciplines 
          pushed me to expand, challenge, and adjust my worldview. I had a chance to explore in both the hardware 
          and software perspective of Computer Science. With the interest in the interdisplany field of CS and
          Mathematics, I decided to pursue my carrer in Mahine Learning and/or data analytics.
        </p>
      </div>
    </div>
    <h2>Experiences</h2>
    <div className="container">
      <div>
        <img src={Tech4Good_Logo} alt="Tech4Good" height="140" width="140"></img>
      </div>
      <div className="description">
        <p className="title">Tech4Good</p>
        <p className="subtitle">Undergraduate Research Assisant (Aug 2020 - Current)</p>
        <p className="body">
          Tech4Good do research in social computing, exploring the intersection of computational 
          systems and social interaction. Our mission is to develop systems--integrating 
          design, modeling, and algorithms--to support flourishing in work, education, 
          governance, and community engagement.
          <br></br>
          <br></br>
          During Fall quarter 2020, we completed a scheduling website called Timely. I was responsible
          for the User Interface and calendar component. The application is currently under pilot study
          and will be release soon.
        </p>
      </div>
    </div>
    <div className="container">
      <div>
        <img src={BSOE_Logo} alt="BSOE" height="auto" width="140"></img>
      </div>
      <div className="description">
        <p className="title">Baskin School of Engineering</p>
        <p className="subtitle">Group Tutor (Jan 2020 - Current)</p>
        <p className="body">
          I am working as a tutor for various programs at the Baskin School Engineering at UCSC. 
          I am a group tutor for Programming Abstraction in Python (CSE30) and Discrete Mathematics (CSE16).
          I also worked as MSI Learning Assisant for Multivariable Calculus (Math23A) and tutor for incoming
          freshman at Baskin Scholars Program.
        </p>
      </div>
    </div>
  </div>
)

export default Experience