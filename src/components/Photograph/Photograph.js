import React from 'react'
import classes from './Photograph.scss'

export const Photograph = (props) => (
  <img
    alt='This is a duck, because Redux!'
    className={classes.photograph}
    width="300"
    height="300"
    src={props.url} />
)

export default Photograph
