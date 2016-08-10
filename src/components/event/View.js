'use strict';

import { __ } from '../../locale';
import React, { Component } from 'react';
import moment from 'moment';

require('styles/event/View.sass');

export default class EventView extends Component {
  render() {
    let {
      event: { title, info, owner, datetime, max, location }
    } = this.props;

    return (
      <div>
        <h2>{title}</h2>

        <div>
          <label>{__('event_info')}: </label>
          {info}
        </div>

        <div>
          <label>{__('event_owner')}: </label>
          {owner}
        </div>

        <div>
          <label>{__('event_date')}: </label>
          {moment(datetime).format(__('datetime_format'))}
        </div>

        <div>
          <label>{__('event_max')}: </label>
          {max}
        </div>

        <div>
          <label>{__('event_location')}: </label>
          {location}
        </div>
      </div>
    );
  }
}

EventView.displayName = 'EventView';
EventView.propTypes = { };
