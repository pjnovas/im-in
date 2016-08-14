import React, {
  Component
} from 'react';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Button } from 'react-toolbox/lib/button';

import Auth from './Auth';

@connect(() => ({}), { push })
export default class Home extends Component {

  render() {
    return (
      <div>
        [Home Content]
        <Button label='Primary Button' primary />
        <Auth />
      </div>
    );
  }
}

Home.propTypes = {};
