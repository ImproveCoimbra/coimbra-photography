import React from 'react'
import classes from './HomeView.scss'
import Photograph from '../../../components/Photograph/Photograph'
import data from '!json!../../../static/photographs.json'
import _ from 'underscore'

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {images: data.images};
  }

  handleSearch(evt) {
    //console.log(evt.currentTarget.value);
    /*this.state.images = _.filter(this.state.images, (img) => img.indexOf(evt.currentTarget.value) != -1);
    this.state.images = _.filter(this.state.images, function (img) {
      img.tags.map(())
    });*/

    if (evt.currentTarget.value.length === 0) {
      this.state.images = data.images;
      this.forceUpdate();
      return;
    }

    var newImages = [];

    this.state.images.map(function (img) {
      for (var i = 0; i < img.tags.length; i++) {
        if (img.tags[i].indexOf(evt.currentTarget.value) != -1) {
          newImages.push(img);
          break;
        }
      }
    });

    this.state.images = newImages;

    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <p id={classes.introDescription}>
          O "Coimbra Photography" é um repositório online de fotografias de Coimbra que tem
          como objetivo ajudar qualquer pessoa que precise de uma fotografia da cidade. Estas
          fotografias estão licenseadas sob a licença CC0, que permite que qualquer pessoa
          utilize ou redistribue as mesmas. Este website foi criado no Improve Coimbra.
        </p>

        <input id={classes.searchBar}
               placeholder="Pesquisa (baixa, jardim)"
               onChange={this.handleSearch.bind(this)}
               type="text"/>

        <ul>
          {this.state.images.map((image, index) =>
            <Photograph key={index} url={image.url} thumbnail={image.thumbnail} tags={image.tags} />
          )}
        </ul>
      </div>
    );
  }
}

export default HomeView
