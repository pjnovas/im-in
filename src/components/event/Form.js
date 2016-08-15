'use strict';

import { __ } from 'locale';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import validate from './validator';
import Location from './Location';

import { Input, Button, Dropdown, DatePicker, TimePicker } from 'controls';

@reduxForm({
  form: 'event-form',
  fields: [ 'category', 'title', 'info', 'datetime', 'max', 'location' ],
  validate
})
export default class FormEvent extends Component {
  render() {
    let {
      categories,
      fields: { category, title, info, datetime, max, location },
      handleSubmit,
      submitting
    } = this.props;

    let catSource = categories.map( c => {
      return { value: c, label: __(`cat_${c}`) }
    });

    return (
      <form onSubmit={handleSubmit}>
        <h2>{__('event_create')}</h2>

        <div>
          <Dropdown auto source={catSource} label={__('event_category')} {...category}/>
          {category.touched && category.error && <div>{category.error}</div>}
        </div>

        <div>
          <Input type="text" {...title} label={__('event_title')}/>
          {title.touched && title.error && <div>{title.error}</div>}
        </div>

        <div>
          <Input type="text" multiline label={__('event_info')} {...info}/>
          {info.touched && info.error && <div>{info.error}</div>}
        </div>

        <div>
          <DatePicker label='Cuando' {...datetime}/>
          <TimePicker label='Hora' {...datetime}/>
          {datetime.touched && datetime.error && <div>{datetime.error}</div>}
        </div>

        <div>
          <Input type="number" label={__('event_max')} {...max}/>
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

        <Button type="submit" disabled={submitting}>
          {submitting ? <i/> : <i/>} {__('event_submit')}
        </Button>
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
