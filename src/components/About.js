import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div>
      <div className='contentContainer'>
        <div className='aboutContainer'>
          <div>
            <img src='self.png' alt='Chrissna Khiev' width="350px" height="350px" />
          </div>
          <div className='aboutText'>
            <h3>About</h3>
            <p>My name is Chrissna (Chris), and I'm a animation graduate from Kennesaw State University. I love illustrating and animating. I'm born and raised in the Atlanta area. I have always been interested in coding as you can tell from previous college courses. After gradutaing from KSU, I entered a Full Stack coding bootcamp by Georgia Tech! I have come to really enjoy problem solving, looking up and reading documentation. I look forward to learning golang and java next! Take a look at my projects to see what I have been up to the last 3 months!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;