'use strict';

import { __ } from 'locale';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import validate from './validator';
import DateTime from 'react-datetime';
import Location from './Location';

@reduxForm({
  form: 'event-form',
  fields: [ 'category', 'title', 'info', 'owner', 'datetime', 'max', 'location' ],
  validate
})
export default class FormEvent extends Component {
  render() {
    let {
      categories,
      fields: { category, title, info, owner, datetime, max, location },
      handleSubmit,
      submitting
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <h2>{__('event_create')}</h2>

        <div>
          <label>{__('event_category')}</label>
          <div>
            <select>
              {categories.map(cat =>
                (<option key={cat} value={cat}>{__(`cat_${cat}`)}</option>)
              )}
            </select>
          </div>
          {category.touched && category.error && <div>{category.error}</div>}
        </div>

        <div>
          <label>{__('event_title')}</label>
          <div>
            <input type="text" placeholder={__('event_title')} {...title}/>
          </div>
          {title.touched && title.error && <div>{title.error}</div>}
        </div>

        <div>
          <label>{__('event_info')}</label>
          <div>
            <input type="text" placeholder={__('event_info')} {...info}/>
          </div>
          {info.touched && info.error && <div>{info.error}</div>}
        </div>

        <div>
          <label>{__('event_owner')}</label>
          <div>
            <input type="text" placeholder={__('event_owner')} {...owner}/>
          </div>
          {owner.touched && owner.error && <div>{owner.error}</div>}
        </div>

        <div>
          <label>{__('event_date')}</label>
          <div>
            <DateTime input={false} {...datetime}
              dateFormat={__('date_format')} timeFormat={__('time_format')}/>
            {/*<input type="text" placeholder={__('event_date')} {...datetime}/>*/}
          </div>
          {datetime.touched && datetime.error && <div>{datetime.error}</div>}
        </div>

        <div>
          <label>{__('event_max')}</label>
          <div>
            <input type="number" placeholder={__('event_max')} {...max}/>
          </div>
          {max.touched && max.error && <div>{max.error}</div>}
        </div>

        <div>
          <label>{__('event_location')}</label>
          <div>
            <input type="text" placeholder={__('event_location')} {...location}/>
            <Location />
          </div>
          {location.touched && location.error && <div>{location.error}</div>}
        </div>

        <button type="submit" disabled={submitting}>
          {submitting ? <i/> : <i/>} {__('event_submit')}
        </button>
      </form>
    );
  }
}

FormEvent.displayName = 'FormEvent';

FormEvent.propTypes = {
  //fields: PropTypes.object.isRequired,
  //handleSubmit: PropTypes.func.isRequired,
  //submitting: PropTypes.bool.isRequired
}
