import React from 'react';
import './App.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './views/Login';
import About from './views/About';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className='test'>
                <h1>ass</h1>
                <Router>
                    <Switch>
                        <Route component={Login} path='/login'></Route>
                        <Route component={About} path='/about'></Route>
                    </Switch>
                </Router>
            </div>

        )
    }
}

export default App;
