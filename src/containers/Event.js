import React, {
  Component
} from 'react';

import { connect } from 'react-redux';
import { fetch } from '../actions/event';
import { push } from 'react-router-redux';
import EventView from '../components/event/View';

@connect( store => ({ state: store.event }), { fetch, push })
export default class Event extends Component {

  componentWillMount() {
    this.props.fetch(this.props.params.eventId);
  }

  render() {
    let {
      state: {
        fetching,
        fetched,
        event
      }
    } = this.props;

    if (fetching){
      return (<div>Cargando Event ...</div>);
    }
    else if (fetched){
      return (
        <EventView event={event} />
      );
    }

    return (<div>Loading...</div>);
  }
}

Event.propTypes = {};
