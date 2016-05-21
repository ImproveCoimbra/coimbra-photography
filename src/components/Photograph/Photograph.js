import React from 'react'
import classes from './Photograph.scss'

export const Photograph = (props) => (
  <img
    alt='This is a duck, because Redux!'
    className={classes.photograph}
    width="300"
    height="300"
    src={"http://studentmundialblog.com/blog/wp-content/uploads/2015/11/coimbra-city.jpg"} />
)

export default Photograph
