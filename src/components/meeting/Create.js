'use strict';

import { __ } from '../../locale';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import validate from './validator';

require('styles/meeting/Create.sass');

@reduxForm({
  form: 'meeting-full',
  fields: [ 'title', 'info', 'owner', 'datetime', 'max', 'location' ],
  validate
})
export default class CreateMeeting extends Component {
  render() {
    let {
      fields: { title, info, owner, datetime, max, location },
      handleSubmit,
      submitting
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <h2>{__('meeting_create')}</h2>

        <div>
          <label>{__('meeting_title')}</label>
          <div>
            <input type="text" placeholder={__('meeting_title')} {...title}/>
          </div>
          {title.touched && title.error && <div>{title.error}</div>}
        </div>

        <div>
          <label>{__('meeting_info')}</label>
          <div>
            <input type="text" placeholder={__('meeting_info')} {...info}/>
          </div>
          {info.touched && info.error && <div>{info.error}</div>}
        </div>

        <div>
          <label>{__('meeting_owner')}</label>
          <div>
            <input type="text" placeholder={__('meeting_owner')} {...owner}/>
          </div>
          {owner.touched && owner.error && <div>{owner.error}</div>}
        </div>

        <div>
          <label>{__('meeting_date')}</label>
          <div>
            <input type="text" placeholder={__('meeting_date')} {...datetime}/>
          </div>
          {datetime.touched && datetime.error && <div>{datetime.error}</div>}
        </div>

        <div>
          <label>{__('meeting_max')}</label>
          <div>
            <input type="text" placeholder={__('meeting_max')} {...max}/>
          </div>
          {max.touched && max.error && <div>{max.error}</div>}
        </div>

        <div>
          <label>{__('meeting_location')}</label>
          <div>
            <input type="text" placeholder={__('meeting_location')} {...location}/>
          </div>
          {location.touched && location.error && <div>{location.error}</div>}
        </div>

        <button type="submit" disabled={submitting}>
          {submitting ? <i/> : <i/>} {__('meeting_submit')}
        </button>
      </form>
    );
  }
}

CreateMeeting.displayName = 'MeetingCreate';

CreateMeeting.propTypes = {
  //fields: PropTypes.object.isRequired,
  //handleSubmit: PropTypes.func.isRequired,
  //submitting: PropTypes.bool.isRequired
}
