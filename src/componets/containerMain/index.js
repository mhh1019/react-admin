import React, { Component } from 'react';
import { Switch } from 'react-router-dom'
import User from '../../views/user/Index';
import Add from '../../views/user/Add'
import PrivateRouter from '../privateRouter/index'
class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Switch>
                <PrivateRouter exact path='/index/user/list' component={User}/>
                <PrivateRouter exact path='/index/user/add' component={Add} />
            </Switch>
         );
    }
}
 
export default MainContent;