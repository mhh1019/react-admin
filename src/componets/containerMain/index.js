import React, { Component } from 'react';
import { Switch } from 'react-router-dom'
import PrivateRouter from '../privateRouter/index'
import component from './components'

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Switch>
                {
                    component.map(item=>{
                        return <PrivateRouter exact path={item.path} component={item.component} />
                    })
                }
                {/* <PrivateRouter exact path='/index/user/list' component={User}/>
                <PrivateRouter exact path='/index/user/add' component={Add} />
                <PrivateRouter exact path='/index/department/list' component={DepartmentIndex} />
                <PrivateRouter exact path='/index/department/add' component={DepartmentAdd} /> */}
            </Switch>
         );
    }
}
 
export default MainContent;