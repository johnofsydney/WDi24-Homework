import React, {PureComponent} from 'react';

class Calculator extends PureComponent {

  constructor(props) {
    super(props);
    this.state = { a: 0, b: 0}
    this._updateA = this._updateA.bind(this)
    this._updateB = this._updateB.bind(this)
  }

  _updateA(event) {
    const a = parseFloat(event.target.value) || 0;
    this.setState({ a })  //NB key has same name as variable, which allows this shortcut. AKA { a: a }
  }

  _updateB (event) {
    const b = parseFloat(event.target.value) || 0;
    this.setState({ b })  //NB key has same name as variable, which allows this shortcut. AKA { a: a }
  }

  render() {
    // const = this.state.a
    // const = this.state.b
    const { a, b } = this.state

    
    return (
      <div>
        <h1>The Calc</h1>
        <input type="number" value = {this.state.a} onChange = {this._updateA}/>
        <input type="number" value = {this.state.b} onChange = {this._updateB}/>

        <h2>Results</h2>
        <p>{ a } + { b } = { a + b }</p>
        <p>{ a } - { b } = { a - b }</p>
        <p>{ a } * { b } = { a * b }</p>
        <p>{ a } / { b } = { a / b }</p>


      </div>
    )
  }
}

export default Calculator
