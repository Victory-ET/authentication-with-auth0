import React from 'react'
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';


const Protected = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => (
        <div>Routing to page...</div>
      ),
    })}
    {...args}
  />
);

export default Protected;