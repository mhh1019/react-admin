import React, { Component } from 'react';
import { Layout } from 'antd'
import './index.scss'
import Aside from './components/Aside'
import HeaderMain from './components/Header'
import MainContent from '../../componets/containerMain/index'
const { Sider, Header, Content } = Layout
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            collapsed:true
         }
    }
    render() { 
        return ( 
            <Layout className='layout-wrap'>
               <Sider width='250px' collapsed={this.state.collapsed}>
                   <Aside />
               </Sider>
               <Layout>
                   <Header className='layout-header'>
                        <HeaderMain />
                   </Header>
                   <Content className='layout-content'>
                       <MainContent/>
                   </Content>
               </Layout>
            </Layout>
         );
    }
}
 
export default Home;