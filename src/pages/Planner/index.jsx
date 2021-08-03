import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { ROUTES } from 'constants/routes';

const Type = React.lazy(() => import('pages/Planner/Type'));
const When = React.lazy(() => import('pages/Planner/When'));
const Where = React.lazy(() => import('pages/Planner/Where'));

const Planner = () => {
  const id = Math.floor(Math.random() * 100) + 1;

  return (
    <>
    <Switch>
      <Redirect exact from={ROUTES.planner.home} to={ROUTES.planner.type} />
      <Route exact path={ROUTES.planner.type} component={Type} />
      <Route exact path={ROUTES.planner.when} component={When} />
      <Route exact path={ROUTES.planner.where} component={Where} />
    </Switch>
    </>
  );
};

export default Planner;
