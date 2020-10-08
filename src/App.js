import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './views/home/Index';
import Login from './views/login/Index'
import PrivateRouter from '../src/componets/privateRouter'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className='test'>
                <Router>
                    <Switch>
                        <Route component={Login} exact path='/'></Route>
                        <PrivateRouter component={Home} path='/index'></PrivateRouter>
                    </Switch>
                </Router>
            </div>

        )
    }
}

export default App;
