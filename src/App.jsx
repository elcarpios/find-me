import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import RouteWrapper from 'components/common/RouteWrapper';

import Loader from 'components/common/Loader';
import DefaultLayout from 'layouts/default';
import Overlay from 'layouts/overlay';

import { ROUTES } from 'constants/routes';
import 'styles/App.css';

const Home = React.lazy(() => import('pages/Home'));
const Plan = React.lazy(() => import('pages/Plan'));
const PageNotFound = React.lazy(() => import('pages/PageNotFound'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<DefaultLayout><Loader /></DefaultLayout>}>
        <Switch>
          <RouteWrapper exact path={ROUTES.home} component={Home} />
          <RouteWrapper exact path={ROUTES.plan} component={Plan} layout={Overlay}/>
          <RouteWrapper path={ROUTES.all} component={PageNotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;

