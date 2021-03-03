import { Route, Redirect } from "react-router-dom"

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)