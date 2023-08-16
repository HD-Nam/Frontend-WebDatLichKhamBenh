import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService';
import { setTimeout } from "timers";
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: ''
        }
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }


    handleLogin = async () => {
        console.log('username: ', this.state.username, 'password : ', this.state.password)
        console.log('all state ', this.state)
        this.setState({
            errMessage: ''
        })

        try {
            let data = await handleLoginApi(this.state.username, this.state.password);
            console.log('data', data);
            if (data) {
                const userId = data.data.IDU;
                const token = data.data.accessToken;
                const expirationDays = 7;
                const expirationDate = new Date();
                console.log(userId);
                expirationDate.setDate(expirationDate.getDate() + expirationDays);
                document.cookie = `userId=${userId}; expires=${expirationDate.toUTCString()}; path=/`;
                document.cookie = `token=${token}; expires=${expirationDate.toUTCString()}; path=/`;

                if (data.data.role === "1" || data.data.role === "3") {
                    console.log('user login succeeds')
                    toast.success('User login succeeded');
                    // this.props.redirectToHome();
                    setTimeout(() => {
                        this.props.redirectToHome();
                        toast.dismiss() // Điều hướng về trang home sau timeout 1 giây
                    }, 2000);

                    // this.props.userLoginSuccess(data.data)
                }
                else if (data.data.role === "2") {
                    console.log('Admin login succeeds')
                    toast.success('Admin login succeeded');
                    // this.props.redirectToAdmin();
                    setTimeout(() => {
                        this.props.redirectToAdmin(); // Điều hướng về trang home sau timeout 1 giây
                        toast.dismiss() // Điều hướng về trang home sau timeout 1 giây

                    }, 2000);
                    // this.props.adminLoginSuccess(data.data)

                }
                // if (data.data.role === 3) {
                //     this.props.userLoginSuccess(data.user)
                //     console.log('user login succeeds')
                // }
                else {
                    this.setState({
                        errMessage: 'Role of user is not correct'
                    })
                }

            }
        } catch (error) {
            console.log(error)
            if (error.response) {
                if (error.response.status === 401) {
                    toast.error(error.response.data.message);
                    this.setState({
                        errMessage: 'Unauthorized'
                    });
                } else if (error.response.data) {
                    toast.error(error.response.data);
                    this.setState({
                        errMessage: error.response.data.message
                    });
                }
            }

            // if (error.response) {
            //     // if (error.response.data) {
            //     //     this.setState({
            //     //         errMessage: error.response.data.message
            //     //     })
            //     // }
            //     console.log(error)
            // }
        }
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
                                    onChange={(event) => { this.handleOnChangePassword(event) }}
                                />
                                <span
                                    onClick={() => { this.handleShowHidePassword() }}
                                ><i className={this.state.isShowPassword ? 'far fa-eye' : 'far fa-eye-slash'}></i></span>
                            </div>
                        </div>
                        <div className="col-12">
                            <Link to="/Register">Đăng ký</Link> |
                            <Link to="/ForgotPassword"> Quên mật khẩu</Link>
                        </div>
                        <div className="col-12" style={{ color: 'red' }}>
                            {this.state.errMessage}
                        </div>
                        <div>
                            <button type="submit" className="btn-login" onClick={() => { this.handleLogin() }}>Đăng nhập</button>
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
        userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfor) => dispatch(actions.userLoginSuccess(userInfor)),
        redirectToHome: () => {
            dispatch(push('/home')); // Dispatch action để điều hướng về trang home
        },
        redirectToAdmin: () => {

            dispatch(push('/system/user-manage')); // Dispatch action để điều hướng về trang admin
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
