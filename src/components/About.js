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
            <p>My name is Chrissna (Chris), and I'm a animation graduate from Kennesaw State University. I love illustrating, animation, and dabble in 3D modeling. I'm born and raised in the Atlanta area.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;