import './App.css';
import Admin from './Pages/Admin';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './common/PrivateRoute';

// props

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/admin" component={Admin} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;