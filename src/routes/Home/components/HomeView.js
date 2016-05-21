import React from 'react'
import classes from './HomeView.scss'
import Photograph from '../../../components/Photograph/Photograph'
import data from '!json!../../../static/photographs.json'

console.log(data);

export const HomeView = () => (
  <div>
    <input id={classes.searchBar}
           placeholder="Search"
           type="text"/>

    <ul>
      {data.images.map((image, index) =>
        <Photograph url={image.url} tags={image.tags}/>
      )}
    </ul>
  </div>
)

export default HomeView
