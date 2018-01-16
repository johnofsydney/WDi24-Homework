import React, {PureComponent as Component} from 'react'
import ReactDOM from 'react-dom';
import {Template} from 'meteor/templating';
import {Blaze} from 'meteor/blaze';

export default class AccountsUIWrapper extends Component {
  //React cimponent lifecycle
  componentDidMount() {
    this.view = Blaze.render(Template.loginButtons,
      reactDOM.findDOMNode(this.refs.container));
  }


  componentWillUnmount() {
    Blaze.remove(this.view);
  }

  render() {
    return <span ref="container" />
  }
}
