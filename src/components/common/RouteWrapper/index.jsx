import React from 'react';
import { Route } from 'react-router-dom';

import DefaultLayout from 'layouts/default';

const RouteWrapper = ({ component: Component, layout: Layout = DefaultLayout, ...rest }) => (
  <Route {...rest} render={(props) =>
    <Layout {...props}>
      <Component {...props} />
    </Layout>
  } />
);

export default RouteWrapper;