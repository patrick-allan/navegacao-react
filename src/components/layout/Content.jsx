import './Content.css'
import React from 'react'
import { Switch, Route} from 'react-router-dom'
import PrivateRoute from '../auth/PrivateRoute'
import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'
import NotFound from '../../views/examples/NotFound'
import LoginView from '../../views/auth/Login'

const Content = props => (    
    <main className="Content">            
        <Switch>
            <PrivateRoute exact path="/about" component={About}/>                                    
            <PrivateRoute exact path="/param/:id" component={Param}/>                                              
            <PrivateRoute exact path="/" component={Home}/>                                                
            <Route path="/login" component={LoginView}/>                
            <Route path="*" component={NotFound}/>            
        </Switch>        
    </main>    
)

export default Content