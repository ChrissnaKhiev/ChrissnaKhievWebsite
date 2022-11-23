import React from 'react';
import '../styles/Cards.css';

function Cards() {
  return (
    <div className='projectContainer'>
      <div className='projectCard'>
        <div className='projectTitle'>
          <a href='https://rpg-the-game.herokuapp.com/'><h3>RPG the Game</h3></a>
          <a href="https://github.com/ChrissnaKhiev/RPG_the_Game">GitHub Repo</a>
        </div>
        <div>
          <div className='centerContent'>
            <img className='imageCard' src='https://media.discordapp.net/attachments/439072572731031553/1044036557755138118/image.png?width=908&height=465' />
            <img className='imageCard' src='https://media.discordapp.net/attachments/439072572731031553/1044036568031178772/image.png?width=908&height=464' />
            <img className='imageCard' src='https://media.discordapp.net/attachments/439072572731031553/1044036694741102642/image.png?width=908&height=464' />
          </div>
          <p>RPG the Game is an D&D inspired text-based game that features leveling up, collecting gold, and purchaseing equipment. Players are able to fight monsters and other player characters.</p>
          <p>Built and created the function of the character creator, model creation, and API routing. Designed most of the pages and animations throughout the game.</p>
        </div>
      </div>
      <div className='projectCard'>
        <div className='projectTitle'>
          <h3>Portfolio Website</h3>
          <a href="https://github.com/ChrissnaKhiev/chrissna-khiev-website">GitHub Repo</a>
        </div>
        <div>
          <div className='centerContent'>
            <img className='imageCard' src='https://media.discordapp.net/attachments/439072572731031553/1044793809319501904/image.png?width=960&height=491' />
            <img className='imageCard' src='https://media.discordapp.net/attachments/439072572731031553/1044793940622184488/image.png?width=960&height=490' />
            <img className='imageCard' src='https://media.discordapp.net/attachments/439072572731031553/1044793976433164288/image.png?width=960&height=491' />
          </div>
          <p>This is where you are! This is an application where I showcase my projects, resume, and artwork! This was created with react.</p>
        </div>
      </div>
      <div className='projectCard'>
        <div className='projectTitle'>
          <h3>Find My Movie</h3>
          <a href="https://github.com/ChrissnaKhiev/BCTW-Team-Project-1">GitHub Repo</a>
        </div>
        <div>
          <div className='centerContent'>
            <img className='imageCard' src='https://raw.githubusercontent.com/ChrissnaKhiev/BCTW-Team-Project-1/main/assets/Images/Main%20Screen.png' />
            <img className='imageCard' src='https://github.com/ChrissnaKhiev/BCTW-Team-Project-1/blob/main/assets/Images/Movie%20Details.png?raw=true' />
            <img className='imageCard' src='https://github.com/ChrissnaKhiev/BCTW-Team-Project-1/blob/main/assets/Images/Search%20Results.png?raw=true' />
          </div>
          <p>Currently offline for inquiries email.</p>
          <p>Find My Movie is website where the user can search movies and find information about the movie. The user is able to create a watchlist to have quick access list for future viewing pleasure. The website was created with HTML, CSS, JS, movieDB Alternative API, and WatchMode API.</p>
        </div>
      </div>
      <div className='projectCard'>
        <div className='projectTitle'>
          <h3>E-Commerce Back-end</h3>
          <a href='https://github.com/ChrissnaKhiev/Khievs-E-Commerce-Back-End'>GitHub Repo</a>
        </div>
        <div>
          <div className='centerContent'>
            <img className='imageCard' src='https://github.com/ChrissnaKhiev/Khievs-E-Commerce-Back-End/raw/main/Assets/ss1.png' />
            <img className='imageCard' src='https://github.com/ChrissnaKhiev/Khievs-E-Commerce-Back-End/raw/main/Assets/ss2.png' />
            <img className='imageCard' src='https://github.com/ChrissnaKhiev/Khievs-E-Commerce-Back-End/raw/main/Assets/ss3.png' />
          </div>
          <p>This application is the back end of an e-commerce site. The application allows the user to use routes to track and modify the database.</p>
        </div>
      </div>
      <div className='projectCard'>
        <div className='projectTitle'>
          <h3>CLI Employee Manager</h3>
          <a href='https://github.com/ChrissnaKhiev/Khievs-Employee-Tracker'>GitHub Repo</a>
        </div>
        <div>
          <div className='centerContent'>
            <img className='imageCard' src='https://github.com/ChrissnaKhiev/Khievs-Employee-Tracker/raw/main/Assets/ss1.png' />
            <img className='imageCard' src='https://github.com/ChrissnaKhiev/Khievs-Employee-Tracker/raw/main/Assets/ss2.png' />
          </div>
          <p>This is a CMS interface or Employee Tracker. This is a command-line application that manages a company's employee database. The user will be able to track and manage the company's employees with this application.</p>
        </div>
      </div>
      <div className='projectCard'>
        <div className='projectTitle'>
          <h3>CLI README Generator</h3>
          <a href='https://github.com/ChrissnaKhiev/Khievs-README-Generator'>GitHub Repo</a>
        </div>
        <div>
          <div className='centerContent'>
            <img className='imageCard' src='https://github.com/ChrissnaKhiev/Khievs-README-Generator/raw/main/Assets/screenshot.png' />
          </div>
          <p>This is an application that takes the user's inputs and puts them into a professional readme format. This was needed to automate the formating of the readme and add a more professional look for the user for their application. I built this to help me and others who would like an easy to use readme generator.</p>
        </div>
      </div>
      <div className='projectCard'>
        <div className='projectTitle'>
          <h3>Art Portfolio</h3>
          <a href='https://github.com/ChrissnaKhiev/Art-Blog'>GitHub Repo</a>
        </div>
        <div>
          {/* <div className='centerContent'>
            <img className='imageCard' src='' />
            <img className='imageCard' src='' />
            <img className='imageCard' src='' />
          </div> */}
          <p>WIP</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;