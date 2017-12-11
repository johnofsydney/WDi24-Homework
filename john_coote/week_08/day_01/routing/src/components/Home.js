import React, { PureComponent as Component} from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render () {
    return (
      <div>
        <h2> Home Page </h2>
          <p> chekc our
            <Link to="/FAQ">Questions</Link>
          </p>
      </div>
    );
  }
}

export default Home
