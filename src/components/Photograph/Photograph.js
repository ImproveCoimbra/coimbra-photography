import React from 'react'
import classes from './Photograph.scss'

export const Photograph = (props) => (
  <div>
    <img
      alt='This is a duck, because Redux!'
      className={classes.duck}
      width="400"
      height="400"
      src={"http://studentmundialblog.com/blog/wp-content/uploads/2015/11/coimbra-city.jpg"} />
  </div>
)

export default Photograph
