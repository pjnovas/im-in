import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './stores';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './containers/App';
import Home from './containers/Home';
import Event from './containers/Event';

import { setLocale } from './locale';
setLocale('es');

const store = createStore(browserHistory, window.__data);
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route key="event-details" path="/:eventId" component={Event}/>
        <IndexRoute component={Home}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
