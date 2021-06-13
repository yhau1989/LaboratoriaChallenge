import './App.css';
// import { Fragment } from 'react'
// import { Popover, Transition } from '@headlessui/react'
// import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import PageNotfound from './pages/404'
import Dashboard from './pages/Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
   <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/dashboard" component={Dashboard} exact />
      <Route component={PageNotfound} />
    </Switch>
   </Router>
  );
}

export default App;
