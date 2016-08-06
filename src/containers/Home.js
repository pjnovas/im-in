import React, {
  Component,
  PropTypes
} from 'react';

import { connect } from 'react-redux';
//import Main from '../components/Main';
//import { increase, decrease } from '../actions/count'

/*
@connect( store => {
    match: store.match
  }, { increase, decrease })
*/

@connect( store => ({ match: store.match }), {})
export default class Home extends Component {
  render() {
    //const { /*actions, */match } = this.props;
    return <h1>Heeey</h1>;
  }
}

Home.propTypes = {
  //actions: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};
