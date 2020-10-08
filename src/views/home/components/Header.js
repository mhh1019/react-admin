import React, { Component } from 'react';
import { MenuFoldOutlined } from '@ant-design/icons'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <span>
                    <MenuFoldOutlined />
                </span>
            </div>
         );
    }
}
 
export default Header;