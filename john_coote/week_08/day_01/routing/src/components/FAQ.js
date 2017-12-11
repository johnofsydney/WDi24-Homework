import React, { PureComponent as Component} from 'react'
import { Link } from 'react-router-dom'

class FAQ extends Component {
  render () {
    return (
      <div>
        <h2> Hime Page </h2>
          <p> cback to
            <Link to="/">Home</Link>
          </p>
      </div>
    );
  }
}

export default FAQ
