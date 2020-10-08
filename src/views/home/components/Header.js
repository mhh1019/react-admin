import React, { Component } from 'react';
import { MenuFoldOutlined } from '@ant-design/icons'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    collapsed = () => {
        this.props.collapsedChange()
    }
    
    render() { 
        return ( 
            <div>
                <span>
                    <MenuFoldOutlined onClick={this.collapsed}/>
                </span>
            </div>
         );
    }
}
 
export default Header;