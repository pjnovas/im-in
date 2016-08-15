import React, {
  Component
} from 'react';

import { __ } from 'locale';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { Link, Button } from 'controls';

import Auth from 'containers/Auth';

import styles from './home.scss';

@connect(() => ({}), { push })
export default class Home extends Component {
  render() {
    return (
      <div className={styles.content}>
        <Link to="/create">
          <Button label={__('create')} raised primary />
        </Link>
        <br/><br/>
        <Auth />
      </div>
    );
  }
}

Home.propTypes = {};
