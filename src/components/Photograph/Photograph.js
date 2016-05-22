import React from 'react'
import classes from './Photograph.scss'

export default class Photograph extends React.Component {
  render() {
    return (
      <a target="_blank" href={this.props.url}>
        <img
          alt='alt text'
          className={classes.photograph}
          width="300"
          height="300"
          src={this.props.thumbnail} />
      </a>
    );
  }
}

export default Photograph
