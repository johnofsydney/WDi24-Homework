import React, { PureComponent as Component } from 'react';
import jsonp from 'jsonp-es6';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = { query: ''};
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(e) {
    this.setState( { query: e.target.value })
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit( this.state.query );
  }

  render() {
    return(
      <form onSubmit={ this._handleSubmit }>
        <input type="search" placeholder="hotdogs" onInput={ this._handleInput }></input>
        <input type="submit" value="Search" />
      </form>
    );
  }
}

class Gallery extends Component {
  render() {
    return (
      <div>
        { this.props.images.map( (imageURL) => <Image url={imageURL} key={imageURL} /> ) }
      </div>
    );
  }
}

function Image (props) {
  return (
    <img src={props.url} width="200" height="200" alt={props.url} />
  )
}

class FlickrSearch extends Component {
  constructor(){
    super();
    this.state = { images: [] };
    this.fetchImages = this.fetchImages.bind(this);
  }

  fetchImages (q) {
    const flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';
    const flickrParams = {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      text: q,
      format: 'json',
      per_page: 500
    }
    const generateURL = function (photo) {
      return [
        'http://farm',
        photo.farm,
        '.static.flickr.com/',
        photo.server,
        '/',
        photo.id,
        '_',
        photo.secret,
        '_q.jpg' // Change "q" for different sizes
      ].join('');
    }
    // console.log(flickrParams);
    jsonp(flickrURL, flickrParams, {callback: 'jsoncallback'}).then((results) => {
      const images = results.photos.photo.map(generateURL);
      this.setState({images});
    });
  }

  render() {
    return (
      <div>
        <h1>Flickrrrr Search</h1>
        <SearchForm onSubmit={ this.fetchImages } />
        <Gallery images={ this.state.images } />
      </div>
    );
  }
}

export default FlickrSearch;
