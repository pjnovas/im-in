import React, {
  Component
} from 'react';

import { connect } from 'react-redux';
import { create } from '../actions/meeting';
import { push } from 'react-router-redux';
import CreateMeeting from '../components/meeting/Create';

@connect( store => ({
  state: store.meeting
}), {
  create, push
})
export default class Home extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.state.created){
      this.props.push('/' + nextProps.state.createdId);
    }
  }

  render() {
    let {
      create,
      state
    } = this.props;

    return (
      <CreateMeeting
        onSubmit={data => create(data)}
        submitting={state.creating}/>
    );
  }
}

Home.propTypes = {};
//onSuccess={() => push('/' + state.createdId)}
