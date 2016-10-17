import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NewForm from './pages/NewForm';
import UserOverview from './pages/UserOverview';
import LoginPage from './pages/Login';
import Layout from './pages/Layout';
//import UserOverview from './pages/UserOverview';

import './index.css';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
        <Route path="/" components={Layout}>
            <IndexRoute components={LoginPage}></IndexRoute>
            <Route path="/overview" components={UserOverview}></Route>
            <Route path="/newForm" components={NewForm}></Route>
        </Route>
    </Router>,
  document.getElementById('root')
);
