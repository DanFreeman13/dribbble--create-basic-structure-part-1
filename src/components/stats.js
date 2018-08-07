import React, { Component } from 'react';

class Stats extends React.Component {
  render() {
    return (

      <div className='shots__stats'>
        <ul className='shots__list'>
          <li><i className='fa fa-eye' />{ this.props.view }</li>
          <li><i className='fa fa-comment' />{ this.props.comment }</li>
          <li><i className='fa fa-heart' />{ this.props.like }</li>
        </ul>
      </div>

      );
    }
  }

  export default Stats;
