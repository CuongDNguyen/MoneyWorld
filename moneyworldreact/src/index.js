import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const moneyWorldRouting = (
    <Switch>
        <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/test" component={Test} />
        </div>
        </Router>
    </Switch>
);
ReactDOM.render(moneyWorldRouting, document.getElementById('root'));
