import React from 'react';
import '../styles/Home.css';
import anime from "animejs/lib/anime.es.js";

var titleAnime = {};
titleAnime.opacityIn = [0,1];
titleAnime.scaleIn = [0.2, 1];
titleAnime.scaleOut = 3;
titleAnime.durationIn = 800;
titleAnime.durationOut = 600;
titleAnime.delay = 500;

anime.timeline({loop: true})
  .add({
    targets: '.titleAnime .letters-1',
    opacity: titleAnime.opacityIn,
    scale: titleAnime.scaleIn,
    duration: titleAnime.durationIn
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
    duration: 500,
    delay: 500
  });

function Home() {

  return (
    <div className='homeContainer'>
      {/* On load show name and reveals nav */}
      <div>
        <h1>Chris</h1>
        <h1>Khiev</h1>
      </div>
        <h2 className='titleAnime'>
          <span className="letters letters-1">Web Developer</span>
          <span className="letters letters-2">Illustrator</span>
          <span className="letters letters-3">Animator</span>
        </h2>
    </div>
  );
}

export default Home;