'use strict';

//import { __ } from '../../locale';
import React from 'react';

//require('styles/event/Profile.sass');

const Profile = props => {
  let {
    user,
    logout
  } = props;

  return (
    <div>
      <span>Hey {user.email}!</span>
      <button onClick={() => logout()}>logout</button>
    </div>
  );
}

Profile.displayName = 'Profile';
Profile.propTypes = { };

export default Profile;
