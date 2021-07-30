import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import RouteWrapper from 'components/common/RouteWrapper';

import Loader from 'components/common/Loader';
import DefaultLayout from 'layouts/default';
import Overlay from 'layouts/overlay';

import { ROUTES } from 'constants/routes';
import 'styles/App.css';

const Home = React.lazy(() => import('pages/Home'));
const Planner = React.lazy(() => import('pages/Planner'));
const PageNotFound = React.lazy(() => import('pages/PageNotFound'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<DefaultLayout><Loader /></DefaultLayout>}>
        <Switch>
          <RouteWrapper exact path={ROUTES.home} component={Home} />
          <RouteWrapper exact path={ROUTES.planner} component={Planner} layout={Overlay}/>
          <RouteWrapper path={ROUTES.all} component={PageNotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;

