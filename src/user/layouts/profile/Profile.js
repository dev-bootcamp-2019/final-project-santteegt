import React, { Component } from 'react'

class Profile extends Component {
  constructor(props, { authData, fromLocal }) {
    super(props)
    authData = this.props
    console.log(`AUTH DATA ${authData}`)
    fromLocal = JSON.parse(eval(localStorage.connectState))
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Profile</h1>
            <p>Change these details in UPort to see them reflected here.</p>
            <p>
              <strong>Name</strong><br />
              {this.props.authData.name}
            </p>
            <p>
              <strong>Phone</strong><br />
              {this.props.authData.phone}
            </p>
            <p>
              <strong>Country</strong><br />
              {this.props.authData.country}
            </p>
            <p>
              <strong>Public Encryption Key</strong><br />
              {this.props.authData.publicEncKey}
            </p>
            <p>
              <strong>From localStorage</strong><br />
              {this.props.fromLocal}
            </p>
          </div>
        </div>
      </main>
    )
  }
}

export default Profile
