import React, { Component } from 'react';
import { Form, Input, Button, Row, Col, message } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import Code from '../../componets/code/index'
import { reg_password } from '../../utils/validate';
import { register } from '../../api/account'
import CryptoJs from 'crypto-js';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            passwordSecond:'',
            module:'register',
            code:''
        }
    }
    onFinish = (values) => {
        if(this.state.passwordSecond !== this.state.password) {
            message.warning('两次密码输入不一致')
        }
        const requestData = {
            username:this.state.username,
            password:CryptoJs.MD5(this.state.password).toString(),
            code:this.state.code
        }
        register(requestData).then(res=>{
            message.success(res.data.message)
            if(res.data.resCode === 0) {
                this.toggleForm()
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    toggleForm = () => {
        this.props.switchForm('login')
    }
    inputChangeUsername = (e) => {
        this.setState({
            username:e.target.value
        })
    }
    inputChangePassword = (e) => {
        this.setState({
            password:e.target.value
        })
    }
    inputSecond = (e) => {
        this.setState({
            passwordSecond:e.target.value
        })
    }
    codeChange = (e) => {
        this.setState({
            code:e.target.value
        })
    }
    render() {
        return (
            <div>
                <div className="form-header">
                    <h4 className="column">注册</h4>
                    <span onClick={this.toggleForm}>登录</span>
                </div>
                <div>
                    <Form
                        name="basic"
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: '请输入登录人!' }]}
                        >
                            <Input value={this.state.username} onChange={this.inputChangeUsername} placeholder='请输入登录人' prefix={<UserOutlined />} />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                { required: true, message: '请输入密码!' },
                                { pattern:reg_password, message:'密码格式不正确！'}
                            ]}
                        >
                            <Input.Password value={this.state.password} onChange={this.inputChangePassword} placeholder='请输入密码' prefix={<UnlockOutlined />} />
                        </Form.Item>
                        <Form.Item
                            name="passwords"
                            rules={[{ required: true, message: '请确认输入密码!' }]}
                        >
                            <Input.Password  value={this.state.passwordSecond} onChange={this.inputSecond} placeholder='请确认输入密码' prefix={<UnlockOutlined />} />
                        </Form.Item>
                        <Form.Item
                            name="code"
                            rules={[{ required: true, message: '请输入验证码!' }]}
                        >
                            <Row gutter={13}>
                                <Col span={15}>
                                    <Input value={this.state.code} onChange={this.codeChange} placeholder='请输入验证码' prefix={<UnlockOutlined />} />
                                </Col>
                                <Col span={9}>
                                    <Code username={this.state.username} module={this.state.module}/>
                                </Col>
                            </Row>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block> 注册 </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div >
        )
    }
}
export default Login