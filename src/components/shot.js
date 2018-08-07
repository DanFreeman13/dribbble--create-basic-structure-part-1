import React, { Component } from 'react';
import Cover from './cover.js'
import Stats from './stats.js'

class Shot extends React.Component {
  render() {
    return (

        <article className='shot'>
          <Cover image={ this.props.data.imageURL }/>
          <Stats view= { this.props.data.views }
          comment= { this.props.data.comments }
          like= { this.props.data.likes }/>
        </article>

      );
    }
  }

  export default Shot;
