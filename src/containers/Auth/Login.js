import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false
        }
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
        console.log(event.target.value)
    }
    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
        console.log(event.target.value)
    } 

    handleLogin = () => {
        console.log('username: ', this.state.username, ' password : ',  this.state.password)
        console.log('all state ', this.state)
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }
    render() {
        return (
           <div className="background-image">
                <div className="container">
                    <div className="content row">
                        <div className="text-login">Đăng nhập</div>
                        <div className="col-12 form-group login-input">
                            <label>Tên đăng nhập:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Enter your username"
                                value={this.state.username}
                                onChange={(event) => this.handleOnChangeUsername(event)}
                            />
                        </div>
                        <div className="col-12 form-group login-input">
                            <label>Mật khẩu:</label>
                            <div className="custom-input-password">
                                <input 
                                    type={this.state.isShowPassword ? 'text' : 'password'}
                                    className="form-control"
                                    placeholder="Enter your password" 
                                    onChange={(event) => {this.handleOnChangePassword(event)}}
                                />
                                <span
                                    onClick={() => {this.handleShowHidePassword()}}
                                ><i class={this.state.isShowPassword ? 'far fa-eye' : 'far fa-eye-slash'}></i></span>
                            </div>
                        </div>
                        <div className="col-12">
                            <span>Đăng ký</span> | <span>Quên mật khẩu?</span>
                        </div>
                        <div>
                            <button type="submit" className="btn-login" onClick={() => { this.handleLogin()}}>Đăng nhập</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
