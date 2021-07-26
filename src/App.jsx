import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Header from 'components/Header';
import Loader from 'components/Loader';
import Footer from 'components/Footer';

import { ROUTES } from 'constants/routes';
import 'styles/App.css';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  flex-wrap: nowrap;
`;

const StyledMain = styled.main`
  flex-grow: 1;
  overflow: auto;
`;

const Home = React.lazy(() => import('pages/Home'));
const Plan = React.lazy(() => import('pages/Plan'));
const PageNotFound = React.lazy(() => import('pages/PageNotFound'));

const App = () => {
  return (
    <StyledApp>
      <Router>
        <Header />
        <StyledMain>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path={ROUTES.home} component={Home} />
              <Route exact path={ROUTES.plan} component={Plan} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </Suspense>
        </StyledMain>
        <Footer />
      </Router>
    </StyledApp>
  );
};

export default App;

