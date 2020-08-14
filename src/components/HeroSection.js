import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Community Elevation</h1>
      <h2>Our Mission:</h2>
      <p>Leading people to overcome obstacles in the
       community and empowering them to see a bright 
       future through mentor-ship in a fun, 
       positive and encouraging environment. 
       At the moment we are seeking a physical location
        preferably in downtown Sharon PA.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          DONATE NOW
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          READ MORE <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
