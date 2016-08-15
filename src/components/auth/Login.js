'use strict';

import { __ } from 'locale';
import React, { Component } from 'react';

//require('styles/event/Login.sass');

export default class Login extends Component {

  state = {
    email: ''
  }

  render() {
    let {
      tokenRequesting,
      tokenRequested,
      sendToken
    } = this.props;

    if (tokenRequested) {
      return (<div>{__('login_sent')}</div>);
    }

    return (
      <div>
        <h2>{__('login_title')}</h2>

        <div>
          <input type="text" value={this.state.email}
            placeholder={__('login_email')}
            onChange={ e => this.setState({ email: e.target.value })}/>
        </div>

        <div>
          <button type="submit" disabled={tokenRequesting}
            onClick={ () => sendToken(this.state.email) }>
            {tokenRequesting ? <i/> : <i/>} {__('login')}
          </button>
        </div>
      </div>
    );
  }

}

Login.displayName = 'Login';
Login.propTypes = { };
