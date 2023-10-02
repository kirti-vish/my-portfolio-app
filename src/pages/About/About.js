import React from 'react'
import "./About.css"
import kirti from '../../images/kirti.jpg'
import Jump from 'react-reveal/Jump';

const About = () => {
  return (
    <>
    <Jump>
      <div className='about' id='about'>
        <div className='row'>
          <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
            <img src={kirti} alt='profile-pic'></img>
          </div>
          <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
            <h1>About me</h1>
            <p>Greetings! I am currently in my third year of pursuing a degree in Chemical Engineering at the prestigious Malaviya National Institute of Technology (MNIT) in Jaipur. In the world of code, I'm a problem-solving wizard weaving logic into digital reality. I possess an insatiable thirst for knowledge and a genuine enthusiasm for continuous learning. I am quick to grasp new concepts and versatile in my ability to contribute effectively across various projects and tasks. My career objective is to find a challenging position where I can grow both personally and professionally. Currently, I am seeking internship opportunities to apply my knowledge to projects, enhance technical skills, and contribute to innovative solutions.</p>
          </div>
        </div>
      </div>
      </Jump>
    </>
  )
}

export default About