import React from 'react'
import classes from './Photograph.scss'

export default class Photograph extends React.Component {
  render() {
    return (
      <img
        alt='alt text'
        className={classes.photograph}
        width="300"
        height="300"
        src={this.props.url} />
    );
  }
}

export default Photograph
