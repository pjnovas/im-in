import React, {
  Component,
  PropTypes
} from 'react';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';

@connect(() => ({ }), { pushState: push })
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    pushState: PropTypes.func.isRequired,
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
