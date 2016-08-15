import React, {
  Component,
  PropTypes
} from 'react';

import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
import { login } from 'actions/auth';
import { fetch as fetchCats } from 'actions/categories';

import { LOCAL_STORAGE_AUTH_TOKEN } from 'constants';

import 'react-toolbox/lib/commons.scss';

@connect( store => ({ auth: store.auth }), { replace, login, fetchCats })
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string,
      query: PropTypes.object
    })
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentWillMount(){
    let {
      location: { query },
      replace,
      auth,
      login,
      fetchCats
    } = this.props;

    if (query.token){
      localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, query.token);
      replace('/');
    }

    fetchCats();

    if (!auth.isLoggedIn && localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN)){
      return login();
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
