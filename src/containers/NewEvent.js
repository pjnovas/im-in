import React, {
  Component
} from 'react';

import { connect } from 'react-redux';
import { create } from '../actions/event';
import { push } from 'react-router-redux';
import EventForm from '../components/event/Form';

@connect( store => ({ state: store.event }), { create, push })
export default class NewEvent extends Component {

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
      <EventForm
        onSubmit={data => create(data)}
        submitting={state.creating}/>
    );
  }
}

NewEvent.propTypes = {};
