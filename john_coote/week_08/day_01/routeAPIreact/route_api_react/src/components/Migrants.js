import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom'

class SearchForm extends Component {
  render () {
    return (
      <div>
        <h3>this is the sechc form</h3>

      </div>
    )
  }
}

class ResultsArea extends Component {
  render () {
    return (
      <div>
        <div>
          <h3>this is the results area</h3>
        </div>
        <div>
          {this.results } !!

        </div>
      </div>
    )
  }
}


class Migrants extends Component {
  constructor () {
    super()
    this.state = { results: [1, 2]}

  }

  render () {
    return (
      <div>
        <h2>Migrant Page ...</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Migrants">Migrant Info</Link></li>
          <li><a href="http://stat.data.abs.gov.au/sdmx-json/data/ABS_CENSUS2011_B10/6101+3207+7103+2201+3104+1201+2100.2+3+4+5+6+7.0.AUS.0.A/all?detail=Full&dimensionAtObservation=AllDimensions">Raw Data from ABS</a></li>
        </ul>

        <SearchForm/>
        <ResultsArea results={[5,6]} />

      </div>
    )
  }
}

export default Migrants
