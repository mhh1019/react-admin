import React, { Component } from 'react';
import { Form, Input, Button, Row, Col,message } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom'
import { login } from '../../api/account'
import Code from '../../componets/code/index'
import CryptoJs from 'crypto-js';
import { setSessionItem } from '../../utils/session'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      codeDisabled:true,
      codeLoading:false,
      codeTxt:'获取验证码',
      module:'login',
      password:'',
      code:''
    }
  }
  onFinish = (values) => {
    const requestData = {
      username:this.state.username,
      password:CryptoJs.MD5(this.state.password).toString(),
      code:this.state.code
    }
    login(requestData).then(res=>{
      message.success(res.data.message)
      setSessionItem(res.data.data.token)
      this.props.history.push('/index')
    })
  }
  toggleForm = () => {
    this.props.switchForm('register')
  }
  inputChang = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  inputChangPassword = (e) => {
    this.setState({
      password:e.target.value
    })
  }
  inputCodeChange = (e) => {
    this.setState({
      code:e.target.value
    })
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
              rules={[
                { required: true, message: '请输入登录人!' },
              ]}
            >
              <Input value={this.state.username} onChange={this.inputChang} placeholder='请输入登录人' prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码' },{min:6,message:'不能小于6位'}]}
            >
              <Input.Password value={this.state.password} onChange={this.inputChangPassword} placeholder='请输入密码' prefix={<UnlockOutlined />} />
            </Form.Item>
            <Form.Item
              name="code"
              rules={[{ required: true, message: '请输入验证码' },{len:6,message:'请输入6位验证码'}]}
            >
              <Row gutter={13}>
                <Col span={15}>
                  <Input value={this.state.code} onChange={this.inputCodeChange} placeholder='请输入验证码' prefix={<UnlockOutlined />} />
                </Col>
                <Col span={9}>
                  <Code username={this.state.username} module={this.state.module}/>
                  {/* <Button type="danger" block onClick={this.getCode} loading={this.state.codeLoading} disabled={this.state.codeDisabled}>{this.state.codeTxt}</Button> */}
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
export default withRouter(Login)