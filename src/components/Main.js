require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

const AppComponent = (props) => {

  return (
    <div className="index">
      <h1>Hello {props.name} {props.match.title}</h1>
    </div>
  );
}

AppComponent.defaultProps = {

};

export default AppComponent;
