import React, { Component } from 'react';
import './index.scss'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: 'login'
    }
  }
  onFinish = () => {
    alert('1')
  }
  switchForm = (values) => {
    this.setState({
      formType:values
    })
  }
  render() {
    const { formType } = this.state
    return (
      <div className='login-box'>
        {
          formType === 'login'?
          <LoginForm switchForm={this.switchForm}/>:<RegisterForm switchForm={this.switchForm}/>
        }
      </div >

    )
  }
}
export default Login