import React, {PureComponent} from 'react';
class Profile extends PureComponent {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = { height: 100 };
    this._zoomIn = this._zoomIn.bind(this);
    this._zoomOut = this._zoomOut.bind(this);
  }

  _zoomIn() {
      this.setState( { height: this.state.height + 10 })
  }


  _zoomOut() {
    this.setState( { height: this.state.height - 10 })
  }



  render() {
    const { name, age, bio, pic } = this.props;  //destructuring
    return(
      <div className="profile">
        <h1>{ name }</h1>
        <h2>Age: { age }</h2>
        <img src={ pic } height={ this.state.height }/>
        <p>{ bio }</p>
        <button onClick={ this._zoomIn }>+</button>
        <button onClick={ this._zoomOut  }>-</button>
        <hr />
      </div>
    )
  }


}

export default Profile;
