import React, { Component } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import './index.scss'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  onFinish = () => {
    alert('1')
  }
  render() {
    return (
      <div className='login-box'>
        <div>
          <div className="form-header">
            <h4 className="column">登录</h4>
            <span>帐号注册</span>
          </div>
          <div>
            <Form
              name="basic"
              onFinish={this.onFinish}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input placeholder='请输入登录人' prefix={<UserOutlined />} />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password placeholder='请输入密码' prefix={<UnlockOutlined />} />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Row gutter={13}>
                  <Col span={15}>
                    <Input placeholder='请输入验证码' prefix={<UnlockOutlined />} />
                  </Col>
                  <Col span={9}>
                    <Button type="danger">获取验证码</Button>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block> 登录 </Button>
              </Form.Item>
            </Form>
          </div>
        </div >
      </div >
      
    )}
}
export default Login