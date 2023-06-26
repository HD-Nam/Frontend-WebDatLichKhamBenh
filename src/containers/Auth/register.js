import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './register.scss';
import { FormattedMessage } from 'react-intl';


class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="background-image">
                <div className="registration-form">
                    <h2>Đăng ký</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Họ và tên:</label>
                            <input
                                type="text"
                                value={fullName}
                                onChange={handleFullNameChange}
                                placeholder="Nhập họ và tên"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Ngày sinh:</label>
                            <input
                                type="date"
                                value={dateOfBirth}
                                onChange={handleDateOfBirthChange}
                                placeholder="Chọn ngày sinh"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Giới tính:</label>
                            <select value={gender} onChange={handleGenderChange} required>
                                <option value="">Chọn giới tính</option>
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                                <option value="Khác">Khác</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Số BHYT:</label>
                            <input
                                type="text"
                                value={bhyt}
                                onChange={handleBHYTChange}
                                placeholder="Nhập số BHYT"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Địa chỉ:</label>
                            <input
                                type="text"
                                value={address}
                                onChange={handleAddressChange}
                                placeholder="Nhập địa chỉ"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Tên tài khoản:</label>
                            <input
                                type="text"
                                value={username}
                                onChange={handleUsernameChange}
                                placeholder="Nhập tên tài khoản"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Mật khẩu:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder="Nhập mật khẩu"
                                required
                            />
                        </div>
                        <button type="submit" className="btn-register">
                            Đăng ký
                        </button>
                    </form>
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
