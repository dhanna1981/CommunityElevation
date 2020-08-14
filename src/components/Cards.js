import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>About Community Elevation Elevation</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Youth Elevation at ROAR'
              label='Strength'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='About Us'
              label='Courage'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Upcoming Events'
              label='Elevating'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Programs'
              label='Growth'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Want to get involved?'
              label='Help Us'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
