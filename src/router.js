import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/auth/PrivateRoute'
import About from './views/examples/About'
import Home from './views/examples/Home'
import Param from './views/examples/Param'
import NotFound from './views/examples/NotFound'
import LoginView from './views/auth/Login'
import Dashboard from './views/dashboard/Dashboard'

const Router = () => (
    <Switch>
        <PrivateRoute exact path="/" component={Dashboard}/>
        <PrivateRoute exact path="/home" component={Home}/>
        <PrivateRoute exact path="/about" component={About}/>
        <PrivateRoute exact path="/param/:id" component={Param}/>        
        <Route path="/login" component={LoginView}/>
        <Route path="*" component={NotFound}/>
    </Switch>
)

export default Router