import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './views/login/Index'
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
                        <Route component={Login} path='/login'></Route>
                    </Switch>
                </Router>
            </div>

        )
    }
}

export default App;
