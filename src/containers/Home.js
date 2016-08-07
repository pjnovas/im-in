import React, {
  Component
} from 'react';

import { connect } from 'react-redux';
import { create } from '../actions/event';
import { push } from 'react-router-redux';
import CreateEvent from '../components/event/Create';

@connect( store => ({
  state: store.event
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
      <CreateEvent
        onSubmit={data => create(data)}
        submitting={state.creating}/>
    );
  }
}

Home.propTypes = {};
//onSuccess={() => push('/' + state.createdId)}
