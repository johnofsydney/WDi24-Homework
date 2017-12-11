import React, {PureComponent} from 'react';


class Clickr extends PureComponent {

  constructor () {
    super();
    console.log("started constructor");
    this.state = { clicks: 0 }
    this._incrementClicks = this._incrementClicks.bind(this);
    // bind
  }

  _incrementClicks () {
    this.setState({ clicks: this.state.clicks + 1 })
    this.props.everyClick(this.state.clicks);
  }

  render() {
    return (
      <button onClick={ this._incrementClicks}>{ this.state.clicks } clicks so far</button>
    );

  }
}


export default Clickr;
