import React, {PureComponent as Component} from 'react'
import Github from '../utils'

export default class GithubUser extends Component {
  constructor(props) {
    super(props);
    this.state = {user: null, repos: null};
  }

  // react component lifecycle ...
  componentWillMount() {
    const username = this.props.match.params.username;
    // AJAX request can go here... or elsewhere... see utils.js
    Github.getUserInfo(username).then( (info) => {
      this.setState({user: info.data});
    });
    Github.getUserRepos(username).then( (info) => {
      this.setState({repos: info.data});
    });
  }

  render() {
    return (
      <div>
        <h2>Github User Info</h2>
        <Profile user={this.state.user} />
        <Repositories repos={this.state.repos} />
      </div>
    )
  }
}


class Profile extends Component {
  render() {
    if (this.props.user === null) {
      return(<div className="profile">Loading...</div>);
    }
    const {login, followers, following, public_repos, public_gists} = this.props.user;
    return (
      <div clasName="profile">
        <h3>Stats for {login}</h3>
        <p>Followers: {followers}</p>
        <p>Repos: {public_repos}</p>
      </div>
    )
  }
}


class Repositories extends Component {
  render() {
    if (this.props.repos === null) {
      return(<div className="repos">Loading...</div>);
    }
    const userRepos = this.props.repos.map( (r) => {
      return (
        <li>
          <a href={r.html_url} target="_blank">
          {r.name}
          </a>
        </li>
      )
    })
    return(
      <div>
        <h3>User Repositories</h3>
        <ul>
          {userRepos}
        </ul>
      </div>
    )
  }
}
