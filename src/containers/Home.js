import React, {
  Component
} from 'react';

import { connect } from 'react-redux';
import { create } from '../actions/meeting';
import CreateMeeting from '../components/meeting/Create';

@connect( store => ({
  meeting: store.meeting
}), {
  create
})
export default class Home extends Component {

  onCreate(data){
    console.dir(data);
    //this.props.create(data);
  }

  onSuccess(){
    console.log('go to the meeting page');
  }

  render() {
    return (
      <CreateMeeting
        onSubmit={this.onCreate}
        onSuccess={this.onSuccess}
        submitting={this.props.meeting.creating}/>
    );
  }
}

Home.propTypes = {};
