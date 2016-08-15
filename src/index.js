import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from 'stores';
import { LOCAL_STORAGE_AUTH_TOKEN } from 'constants';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from 'containers/App';
import Home from 'containers/home/Home';
import CreateEvent from 'containers/event/Create';
import Event from 'containers/event/Event';

import { setLocale } from 'locale';
setLocale('es');

const store = createStore(browserHistory, window.__data);
const history = syncHistoryWithStore(browserHistory, store);

store.subscribe(() => {
  let state = store.getState().auth;

  if (state.loggingOut && localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN)){
    localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN);
    return;
  }

  if (state.isLoggedIn && state.auth.user){
    localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, state.auth.user.token);
  }
});

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route key="event-create" path="/create" component={CreateEvent}/>
        <Route key="event-details" path="/:eventId" component={Event}/>
        <IndexRoute component={Home}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
