import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import RouteWrapper from 'components/router/RouteWrapper';
import Loader from 'components/router/Loader';
import DefaultLayout from 'layouts/default';
import Overlay from 'layouts/overlay';

import { ROUTES } from 'constants/routes';
import 'styles/App.css';

const Home = React.lazy(() => import('pages/Home'));
const Planner = React.lazy(() => import('pages/Planner'));
const MyPlans = React.lazy(() => import('pages/MyPlans'));
const PageNotFound = React.lazy(() => import('pages/PageNotFound'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<DefaultLayout><Loader /></DefaultLayout>}>
        <Switch>
          <RouteWrapper exact path={ROUTES.home} component={Home} />
          <RouteWrapper path={ROUTES.planner.home} component={Planner} layout={Overlay} />
          <RouteWrapper path={ROUTES.myplans.home} component={MyPlans} layout={Overlay} />
          <RouteWrapper path={ROUTES.all} component={PageNotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;

