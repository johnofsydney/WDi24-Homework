import React, {PureComponent as Component} from 'react'
import PropTypes from 'prop-types';

import axios from 'axios';

//Accessing tyhe ROUTE GET /secrets.json
const SERVER_URL = "http://593d3fe7.ngrok.io/secrets.json"



class SecretsForm extends Component {
  constructor() {
    super();
    this.state = { content: '' }
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    this.setState ( { content: e.target.value } )
  }

_handleSubmit (e) {
  e.preventDefault();
  this.props.onSubmit ( this.state.content )
  // this.props.onSubmit this (SecretsForm) has many props, thagt come from parent (Secrets). One of them is called onSubmit
  // ( this.state.content ) is the argument that is passed back up. It comes from SecretsForm
  this.setState( { content: ''});
}

  render () {
    return (
      <form onSubmit={ this._handleSubmit }>
        <textarea onChange={ this._handleChange } value={ this.state.content }></textarea>
        <input type="submit" value="tell" />
      </form>
    )
  }
}

SecretsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
// class Gallery extends Component {
//   render () {
//     return (
//       <h3>Gallery COMing soon</h3>
//     )
//   }
// }


function Gallery (props) {
  return (
    <div>
      {props.secrets.map( s => <p key={ s.id }>{ s.content }</p> ) }
    </div>
  )
}


class Secrets extends Component {

  constructor() {
    super()
    this.state = { secrets: [] }
    this.saveSecret = this.saveSecret.bind(this);

    const fetchSecrets = () => {
      axios.get(SERVER_URL).then( results => this.setState({ secrets: results.data }) )
      setTimeout ( fetchSecrets, 4000 );
    }
    fetchSecrets()


  }

  saveSecret(s) {
    console.log(s);
    // s comes from _handleSubmit in SecretsForm.
    // it is the this.state.content passed in by this.props.onSubmit
    // this.setState( { secrets: [...this.state.secrets, s]}); //ref immutability, makes a new array and sets state sexcrets to this new array
    axios.post(SERVER_URL, {content: s}).then(results => {
      this.setState( { secrets: [results.data, ...this.state.secrets]})
    })

  }

  render() {
    return (
      <div>
        <h1>secrets</h1>
        <h2>tell us your eecrets</h2>
        <SecretsForm onSubmit={ this.saveSecret }/>
        <Gallery secrets={ this.state.secrets }/>
      </div>
      // onSubmit is a react function. this.saveSecret is the function to be run when the form is submitted.
    )
  }
}

export default Secrets
