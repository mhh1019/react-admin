import React, { Component } from 'react';
import { Button, message } from 'antd'
import { getSms } from '../../api/account'
import { validate_email } from '../../utils/validate'

let timer = null
class Code extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:props.username,
            codeTxt: '获取验证码',
            codeDisabled: false,
            codeLoading: false,
            module:props.module
        }
    }
    componentWillReceiveProps({username}){
        this.setState({
            username
        })
    }
    componentWillUnmount(){
        console.log('1')
        clearInterval(timer)
    }
    getCode = () => {
        if(this.state.username === ''){
            message.warning('请输入登录人！')
            return false
        }
        if(!validate_email(this.state.username)){
            message.warning('邮箱格式正确！')
            return false
        }
        this.setState({
            codeLoading: true,
            codeTxt: '发送中'
        })
        const data = {
            username: this.state.username,
            module: this.state.module
        }
        getSms(data).then(res => {
            message.success(res.data.message)
            this.count()
        }).catch(err => {
            this.setState({
                codeLoading: false,
                codeTxt: '重新获取'
            })
        })
    }
    count = () => {
        let sec = 5
        this.setState({
            codeTxt: `${sec}S`,
            codeLoading: false,
            codeDisabled: true
        })
        timer = setInterval(() => {
            sec--;
            if (sec <= 0) {
                this.setState({
                    codeTxt: '重新获取',
                    codeLoading: false,
                    codeDisabled: false
                })
                clearInterval(timer)
                return false
            }
            this.setState({
                codeTxt: `${sec}S`,
            })
        }, 1000);
    }
    render() {
        return (
            <Button type="danger" onClick={this.getCode} disabled={this.state.codeDisabled} loading={this.state.codeLoading} block >{this.state.codeTxt}</Button>
        );
    }
}

export default Code;