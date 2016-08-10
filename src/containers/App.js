import React, {
  Component,
  PropTypes
} from 'react';

import { connect } from 'react-redux';

require('normalize.css/normalize.css');
require('react-datetime/css/react-datetime.css');
require('styles/App.css');

@connect(() => ({ }), { })
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string
    })
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
