import React, {PureComponent} from 'react'
import Clickr from './Clickr';

class HistoryEraser extends PureComponent {

  constructor() {
    super()
    this.state = {historyStillExists: true }
    this.maybeEraseHistory = this.maybeEraseHistory.bind(this);
  }

  maybeEraseHistory(clickCount) {
    if (clickCount >= 4) {
      console.log("Time to Erase History", clickCount);
      this.setState( { historyStillExists : false })
    }
  }
  render() {
    return (
      <div style={{"background-color":this.state.historyStillExists ? "white" : "red"}}>
        <h2>History Eraser</h2>
        <Clickr everyClick={ this.maybeEraseHistory} />

        { this.state.historyStillExists || <h2>History is gone</h2>}
      </div>
    )
  }

}

export default HistoryEraser;
