import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getSessionItem } from '../../utils/session'
const PrivateRouter =({ component: Component, ...rest }) => {
    return (
      <Route {...rest} render={routeProps => 
        getSessionItem() ?(<Component {...routeProps} />) :<Redirect to='/' />
    }/>);
}
export default PrivateRouter
  