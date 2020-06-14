import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Switch, Route, Redirect} from 'react-router-dom'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './pages/login';

interface IAuthentificatedRoute { 
  component: any;
  auth: boolean;
  path: string;
  exact: boolean;
}

function AuthenticatedRoute(params: IAuthentificatedRoute) {
  return (
    <Route  
      render={(props) => params.auth === true
      ? <params.component params />
      : <Redirect to={{pathname: '/login'}} />}
    />
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Switch>
      <Route exact path="/login" component={Login} />
      <AuthenticatedRoute auth={false} exact path="/" component={App} />
    </Switch>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
