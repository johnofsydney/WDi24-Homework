import React, { Component } from 'react';
import Footer from './Footer'
import Header from './Header'



class App extends Component {
  constructor () {
    super()
    this.state = {
      name: "John",
      age: 45,
      title: "Welcome"};
  }

  changeTitle(title) {
     this.setState({title: "QWelcome Fred"});
  }


  render() {
    // setTimeout( () => {
    //   this.setState({age:33} );
    // }, 3000);
    const title = "welcome";



    return (
      <div className="App">
      <Header changeTitle={ this.changeTitle.bind(this)} title={title} name={this.state.name} />
      <p> Name: {this.state.name} </p>
      <p> Age: {this.state.age} </p>
      <p>More coming soon</p>
      <Footer age={this.state.age}/>
      </div>
    );
  }
}

export default App;
