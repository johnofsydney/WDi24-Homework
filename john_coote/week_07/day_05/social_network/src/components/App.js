import React, { Component } from 'react';
import Profile from './Profile';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Profile name="Groucho" age="deceased" bio="once I shot an elephant in my pajamas" pic="http://fillmurray.com/201/209" />
        <Profile name="Johnno" age="45" bio="never shot anyone" pic="http://fillmurray.com/201/209" />

      </div>
    );
  }
}

export default App;
