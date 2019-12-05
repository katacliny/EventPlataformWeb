import React from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'
import AuthReducer from './state/authreducer';
import {createBrowserHistory} from 'history';
import Login from './screen/login';
import Createuser from './screen/createuser';
import Home from './screen/home';
import Chat from './screen/chat';


const history = createBrowserHistory();

const rootReducer = combineReducers({
  reducer:AuthReducer
});
let store = createStore(rootReducer)



function App() {
  return (
    <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/createuser" component={Createuser} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/chat" component={Chat} />
          </Switch>
        </Router>
    </Provider>
  );
}

export default App;
