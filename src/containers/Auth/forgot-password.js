import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './forgot-password.scss';
import { FormattedMessage } from 'react-intl';


class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="background-image">
                <div className="forgot-password-page">
                    <h2>Quên mật khẩu</h2>
                    {!isEmailSent ? (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Email:</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="Nhập địa chỉ email"
                                    required
                                />
                            </div>
                            <button type="submit" className="btn-submit">
                                Gửi yêu cầu
                            </button>
                        </form>
                    ) : (
                        <div className="email-sent-message">
                            <p>
                                Một email đã được gửi đến địa chỉ <strong>{email}</strong> để đặt lại mật khẩu.
                            </p>
                            <p>Vui lòng kiểm tra hòm thư của bạn.</p>
                        </div>
                    )}
                </div>
            </div>
        );
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
