import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { ROUTES } from 'constants/routes';

const Type = React.lazy(() => import('pages/Planner/Type'));
const When = React.lazy(() => import('pages/Planner/When'));

const Planner = () => {
  const id = Math.floor(Math.random() * 100) + 1;

  return (
    <>
    <Switch>
      <Redirect exact from={ROUTES.planner.home} to={`${ROUTES.planner.type}/${id}`} />
      <Route exact path={`${ROUTES.planner.type}/:id`} component={Type} />
      <Route exact path={`${ROUTES.planner.when}/:id`} component={When} />
    </Switch>
    </>
  );
};

export default Planner;
