import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Header from 'components/Header';
import Loader from 'components/Loader';
import Footer from 'components/Footer';

import 'styles/App.css';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const StyledMain = styled.main`
  flex-grow: 1;
`;

const Home = React.lazy(() => import('pages/Home'));
const Plan = React.lazy(() => import('pages/Plan'));
const PageNotFound = React.lazy(() => import('pages/PageNotFound'));

const App = () => {
  return (
    <StyledApp>
      <Header />
      <StyledMain>
        <Suspense fallback={<Loader />}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/plan" component={Plan} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </Router>
        </Suspense>
      </StyledMain>
      <Footer />
    </StyledApp>
  );
};

export default App;

