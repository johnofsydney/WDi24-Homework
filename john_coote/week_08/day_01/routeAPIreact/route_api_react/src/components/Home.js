import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render () {
    return (
      <div>
        <h2>Home Page ...</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Migrants">Migrant Info</Link></li>
          <li><a href="http://www.smh.com.au">External Link to SMH using ahref</a></li>
        </ul>
      </div>
    )
  }
}

export default Home
