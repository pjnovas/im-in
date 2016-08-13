import React, {
  Component
} from 'react';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Auth from './Auth';

@connect(() => ({}), { push })
export default class Home extends Component {

  render() {
    return (
      <div>
        [Home Content]
        <Auth />
      </div>
    );
  }
}

Home.propTypes = {};
