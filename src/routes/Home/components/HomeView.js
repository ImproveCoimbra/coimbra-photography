import React from 'react'
import classes from './HomeView.scss'
import Photograph from '../../../components/Photograph/Photograph'

export const HomeView = () => (
  <div>
    <input id={classes.searchBar}
           placeholder="Search"
           type="text"/>

    <div id={classes.photographGrid}>
      {[...Array(10)].map((x, i) =>
        <Photograph/>
      )}
    </div>
  </div>
)

export default HomeView
