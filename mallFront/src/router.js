import React from 'react';

import { Route , routerRedux } from 'dva/router';
import { Router, hashHistory , IndexRedirect ,Redirect } from 'react-router';

import IndexPage from './page/IndexPage';
import PageCont from './page/pageContent/pageContent';//首页内容
import DetailsArea from './page/detailsArea/detailsArea';//商品列表
import DetailsPic from './page/detailsPic/detailsPic';//商品详情

function RouterConfig({pathname,history}) {
  return (
    <Router history={hashHistory}>
         <Route path="/" component={IndexPage} breadcrumbName="HappyMall">
                <IndexRedirect to="/index.html" />
                <Route path="/index.html" component={PageCont} breadcrumbName="首页"/>
                <Route path="/details.html" component={DetailsArea} breadcrumbName="商品列表">
                    <Route path="/details.html/goodsdetails" component={DetailsPic} breadcrumbName="商品详情"/>
                </Route>
        </Route>
    </Router>
  );
}

export default RouterConfig;
