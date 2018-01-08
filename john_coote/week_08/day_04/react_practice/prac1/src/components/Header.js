import React, { Component } from 'react';



class Header extends Component {
  render() {
    console.log(this.props);
    this.props.changeTitle("newTit")
    return (
      <div className="Header">
      <p>{this.props.title} {this.props.name}</p>
      <input/ >

      </div>
    );
  }
}

export default Header;
