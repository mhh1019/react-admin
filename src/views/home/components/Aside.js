import React, { Component } from 'react';
import './aside.scss'
import AsideMenu from '../../../componets/asideMenu/index'
class Aside extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <h1 className='logo'>
                    <span></span>
                </h1>
                <AsideMenu/>
            </>
        );
    }
}

export default Aside;