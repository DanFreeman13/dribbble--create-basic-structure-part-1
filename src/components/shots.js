import React, { Component } from 'react';
import Shot from './shot.js';

const listOfImages = [
  {imageURL: "https://cdn.dribbble.com/users/1925451/screenshots/4923831/office_1x.jpg", views: 3950, comments: 12, likes: 2905},
  {imageURL: "https://cdn.dribbble.com/users/1048838/screenshots/4923148/altostack-agnieszka-jucha-dribbble_1x.jpg", views: 48013, comments: 9, likes: 630},
  {imageURL: "https://cdn.dribbble.com/users/60166/screenshots/4923724/logo_exploration_1x.jpg", views: 785699, comments: 4091, likes: 1107},
  {imageURL: "https://cdn.dribbble.com/users/1171903/screenshots/4923639/behance_1x.jpg", views: 56325, comments: 19, likes: 35},
  {imageURL: "https://cdn.dribbble.com/users/59947/screenshots/4924915/muti_dribbble-800x600_1x.jpg", views: 75, comments: 23, likes: 20}

];



class Shots extends React.Component {
  render() {
    return (
      <div className='container'>

      { listOfImages.map(function(frame) {
        return <Shot data={ frame } />
      }) }

      </div>
    );
  }
}

export default Shots;
