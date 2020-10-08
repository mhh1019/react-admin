import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom'
import { LaptopOutlined } from '@ant-design/icons';
import router from '../../router/index'
const { SubMenu } = Menu;
class AsideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKeys: [],
            openKeys: []
        }
    }
    componentDidMount() {
        console.log(this.props)
        const pathName = this.props.location.pathname
        const openKeys = pathName.split('/').slice(0, 3).join('/')
        const menuHigh = {
            pathName,
            openKeys
        }
        this.selectMenu(menuHigh)
    }
    selectHeigh = ({ item, key, keyPath, domEvent }) => {
        const menuHigh = {
            pathName: key,
            openKeys: keyPath[keyPath.length - 1]
        }
        this.selectMenu(menuHigh)
    }
    selectMenu = ({ pathName, openKeys }) => {
        this.setState({
            selectedKeys: [pathName],
            openKeys: [openKeys]
        })
    }
    openMenu = (openKeys) => {
        this.setState({
            openKeys:[openKeys[openKeys.length-1]]
        })
    }
    menu = ({ title, key }) => {
        return <Menu.Item key={key} >
            <Link to={key}>{title}</Link>
        </Menu.Item>
    }
    subMenu = ({ title, key, child }) => {
        return <SubMenu key={key} icon={<LaptopOutlined />} title={title}>
            {
                child && child.map(item => {
                    return item.child && item.child.length > 0 ? this.subMenu(item) : this.menu(item)
                })
            }
        </SubMenu>
    }
    render() {
        const { selectedKeys, openKeys } = this.state
        return (
            <>
                <Menu
                    mode="inline"
                    onClick={this.selectHeigh}
                    onOpenChange={this.openMenu}
                    theme='dark'
                    selectedKeys={selectedKeys}
                    openKeys={openKeys}
                    style={{ borderRight: 0 }}
                >
                    {
                        router && router.map(firstItem => {
                            return firstItem.child && firstItem.child.length > 0 ? this.subMenu(firstItem) : this.menu(firstItem)
                        })
                    }
                </Menu>
            </>
        );
    }
}

export default withRouter(AsideMenu);