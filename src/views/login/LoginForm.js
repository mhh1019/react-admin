import React, { Component } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  onFinish = (values) => {
    console.log(values)
  }
  toggleForm = () => {
    this.props.switchForm('register')
  }
  render() {
    return (
      <div>
        <div className="form-header">
          <h4 className="column">登录</h4>
          <span onClick={this.toggleForm}>帐号注册</span>
        </div>
        <div>
          <Form
            name="basic"
            onFinish={this.onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请输入登录人!' }, { type: "email", message: '请输入正确格式' }]}
            >
              <Input placeholder='请输入登录人' prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码' },{min:6,message:'不能小于6位'}]}
            >
              <Input.Password placeholder='请输入密码' prefix={<UnlockOutlined />} />
            </Form.Item>
            <Form.Item
              name="code"
              rules={[{ required: true, message: '请输入验证码' },{len:6,message:'请输入6位验证码'}]}
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
    )
  }
}
export default Login