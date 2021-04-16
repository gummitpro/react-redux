import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './utils/history';
import { ROUTERS } from './constants/router';

import DefaultLayout from './components/DefaultLayout';
import LoginLayout from './components/LoginLayout';
import HomePage from './pages/Home';
import DetailPage from './pages/Detail';
import LoginPage from './pages/Login';

function BrowserRouter(props) {
  const { productList } = props;
  return (
    <Router history={history}>
      <Switch>
        <DefaultLayout
          exact
          path={ROUTERS.HOME}
          component={HomePage}
          productList={productList}
        />
        {/* <Route exact path={ROUTERS.PRODUCT_LIST} component={DetailPage} /> */}
        <LoginLayout exact path={ROUTERS.LOGIN} component={LoginPage} />
      </Switch>
    </Router>
  )
}

export default BrowserRouter
