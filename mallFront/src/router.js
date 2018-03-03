import React from 'react';
//router3引入
import { Router, Route, hashHistory, IndexRedirect, Redirect} from 'react-router';

import IndexPage from './page/IndexPage';

function RouterConfig({history}) {
  return (
    <Router history={hashHistory}>
         <Route path="/" component={IndexPage}>

        </Route>
    </Router>
  );
}

export default RouterConfig;
