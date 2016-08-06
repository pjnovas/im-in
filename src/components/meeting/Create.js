'use strict';

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import validate from './validator';

require('styles/meeting/Create.sass');

@reduxForm({
  form: 'create-meeting',
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

        <div>
          <label>Title</label>
          <div>
            <input type="text" placeholder="Title" {...title}/>
          </div>
          {title.touched && title.error && <div>{title.error}</div>}
        </div>

        <div>
          <label>info</label>
          <div>
            <input type="text" placeholder="info" {...info}/>
          </div>
          {info.touched && info.error && <div>{info.error}</div>}
        </div>

        <div>
          <label>owner</label>
          <div>
            <input type="text" placeholder="owner" {...owner}/>
          </div>
          {owner.touched && owner.error && <div>{owner.error}</div>}
        </div>

        <div>
          <label>datetime</label>
          <div>
            <input type="text" placeholder="datetime" {...datetime}/>
          </div>
          {datetime.touched && datetime.error && <div>{datetime.error}</div>}
        </div>

        <div>
          <label>max</label>
          <div>
            <input type="text" placeholder="max" {...max}/>
          </div>
          {max.touched && max.error && <div>{max.error}</div>}
        </div>

        <div>
          <label>location</label>
          <div>
            <input type="text" placeholder="location" {...location}/>
          </div>
          {location.touched && location.error && <div>{location.error}</div>}
        </div>

        <button type="submit" disabled={submitting}>
          {submitting ? <i/> : <i/>} Submit
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
