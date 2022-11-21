import React from 'react';
import '../styles/Home.css';
import anime from "animejs/lib/anime.es.js";


function Home() {

  var titleAnime = {};
  titleAnime.opacityIn = [0,1];
  titleAnime.scaleIn = [0.2, 1];
  titleAnime.scaleOut = 3;
  titleAnime.durationIn = 1000;
  titleAnime.durationOut = 800;
  titleAnime.delay = 300;

  const animationRef = React.useRef(null);

  React.useEffect(() => {
    animationRef.current = anime.timeline({loop: true})
    .add({
      targets: '.titleAnime .letters-1',
      opacity: titleAnime.opacityIn,
      scale: titleAnime.scaleIn,
      duration: titleAnime.durationIn,
      delay: 3000
    }).add({
      targets: '.titleAnime .letters-1',
      opacity: 0,
      scale: titleAnime.scaleOut,
      duration: titleAnime.durationOut,
      easing: "easeInExpo",
      delay: titleAnime.delay
    }).add({
      targets: '.titleAnime .letters-2',
      opacity: titleAnime.opacityIn,
      scale: titleAnime.scaleIn,
      duration: titleAnime.durationIn
    }).add({
      targets: '.titleAnime .letters-2',
      opacity: 0,
      scale: titleAnime.scaleOut,
      duration: titleAnime.durationOut,
      easing: "easeInExpo",
      delay: titleAnime.delay
    }).add({
      targets: '.titleAnime .letters-3',
      opacity: titleAnime.opacityIn,
      scale: titleAnime.scaleIn,
      duration: titleAnime.durationIn
    }).add({
      targets: '.titleAnime .letters-3',
      opacity: 0,
      scale: titleAnime.scaleOut,
      duration: titleAnime.durationOut,
      easing: "easeInExpo",
      delay: titleAnime.delay
    }).add({
      targets: '.titleAnime',
      opacity: 0,
      duration: 300,
    });
  });

  return (
    <div className='homeContainer'>
      {/* On load show name and reveals nav */}
      <div className='homeCenter'>
        <h1 className='fade'>Chris Khiev</h1>
      </div>
      <div className='homeCenter'>
        <h2 className='titleAnime'>
          <span className="letters letters-1">Web Developer</span>
          <span className="letters letters-2">Illustrator</span>
          <span className="letters letters-3">Animator</span>
        </h2>
      </div>
    </div>
  );
}

export default Home;