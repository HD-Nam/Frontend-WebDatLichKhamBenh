<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';
=======
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './register.scss';
import { FormattedMessage } from 'react-intl';
import register from '../../api/register';
>>>>>>> af47ae08ad28ae4410e4e11e059b824aa75e7216

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    gender: '',
    bhytNumber: '',
    address: '',
    username: '',
    password: ''
  });

<<<<<<< HEAD
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <div className="background-image-re">
        <div className="container-re">
            <div className="register-re">
                <h2>Đăng ký</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                    Họ và tên:
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                    </label>
                    <label>
                    Ngày sinh:
                    <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
                    </label>
                    <label>
                    Giới tính:
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="">Chọn giới tính</option>
                        <option value="male">Nam</option>
                        <option value="female">Nữ</option>
                        <option value="other">Khác</option>
                    </select>
                    </label>
                    <label>
                    Số BHYT:
                    <input type="text" name="bhytNumber" value={formData.bhytNumber} onChange={handleChange} />
                    </label>
                    <label>
                    Địa chỉ:
                    <input type="text" name="address" value={formData.address} onChange={handleChange} />
                    </label>
                    <label>
                    Tên tài khoản:
                    <input type="text" name="username" value={formData.username} onChange={handleChange} />
                    </label>
                    <label>
                    Mật khẩu:
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                    </label>
                    <button type="submit">Đăng ký</button> 
                </form>
                <Link to="/Login">Quay lại trang đăng nhập</Link>
=======
class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: '',
            dateOfBirth: '',
            gender: '',
            phoneNumber: '',
            bhyt: '',
            address: '',
            username: '',
            password: ''
        };
    }
    handleFullNameChange = (event) => {
        this.setState({ fullName: event.target.value });
        console.log(this.state.fullName);
    }

    handleDateOfBirthChange = (event) => {
        this.setState({ dateOfBirth: event.target.value });
        console.log(this.state.dateOfBirth);

    }

    handleGenderChange = (event) => {
        this.setState({ gender: event.target.value });
        console.log(this.state.gender);

    }
    handlePhoneNumberChange = (event) => {
        this.setState({ phoneNumber: event.target.value });
        console.log(this.state.phoneNumber);

    }
    handleBHYTChange = (event) => {
        this.setState({ bhyt: event.target.value });
        console.log(this.state.bhyt);

    }

    handleAddressChange = (event) => {
        this.setState({ address: event.target.value });
        console.log(this.state.address);

    }

    handleUsernameChange = (event) => {
        this.setState({ username: event.target.value });
        console.log(this.state.username);

    }

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
        console.log(this.state.password);

    }
    handleSubmit = async (event) => {
        event.preventDefault();

        const { fullName, dateOfBirth, gender, phoneNumber, bhyt, address, username, password } = this.state;
        console.log(this.state);
        // Gọi API đăng ký
        const requestBody = {
            name: fullName,
            dob: dateOfBirth,
            sex: gender,
            phoneNumber: phoneNumber,
            BHYT: bhyt,
            address: address,
            username: username,
            password: password
        };
        await register(requestBody)
            .then((response) => {
                console.log(response);
                alert('Đăng ký thành công');

            })
            .catch((error) => {
                // Xử lý lỗi
                console.log(error);
                alert('Đăng ký thất bại');
            });
        // try {
        //     let data = await register(this.state.username, this.state.password);
        //     if (data && data.errCode !== 0) {
        //         this.setState({
        //             errMessage: data.message
        //         })
        //     }
        //     if (data && data.errCode === 0) {
        //         this.props.userLoginSuccess(data.user)
        //         console.log('login succeeds')
        //     }
        // } catch (error) {
        //     if (error.response) {
        //         if (error.response.data) {
        //             this.setState({
        //                 errMessage: error.response.data.message
        //             })
        //         }
        //     }
        //     // console.log('hoidanit', error.response)                                              
        // }
    }
    render() {
        const { fullName, dateOfBirth, gender, phoneNumber, bhyt, address, username, password } = this.state;
        return (
            <div className="background-image">
                <div className="registration-form">
                    <h2>Đăng ký</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Họ và tên:</label>
                            <input
                                type="text"
                                value={fullName}
                                onChange={this.handleFullNameChange}
                                placeholder="Nhập họ và tên"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Ngày sinh:</label>
                            <input
                                type="date"
                                value={dateOfBirth}
                                onChange={this.handleDateOfBirthChange}
                                placeholder="Chọn ngày sinh"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Giới tính:</label>
                            <select value={gender} onChange={this.handleGenderChange} required>
                                <option value="">Chọn giới tính</option>
                                <option value="nam">Nam</option>
                                <option value="nu">Nữ</option>
                                <option value="Khác">Khác</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Số điện thoại:</label>
                            <input
                                type="text"
                                value={phoneNumber}
                                onChange={this.handlePhoneNumberChange}
                                placeholder="Nhập số điện thoại"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Số BHYT:</label>
                            <input
                                type="text"
                                value={bhyt}
                                onChange={this.handleBHYTChange}
                                placeholder="Nhập số BHYT"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Địa chỉ:</label>
                            <input
                                type="text"
                                value={address}
                                onChange={this.handleAddressChange}
                                placeholder="Nhập địa chỉ"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Tên tài khoản:</label>
                            <input
                                type="text"
                                value={username}
                                onChange={this.handleUsernameChange}
                                placeholder="Nhập tên tài khoản"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Mật khẩu:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={this.handlePasswordChange}
                                placeholder="Nhập mật khẩu"
                                required
                            />
                        </div>
                        <button type="submit" className="btn-register">
                            Đăng ký
                        </button>
                    </form>
                </div>
>>>>>>> af47ae08ad28ae4410e4e11e059b824aa75e7216
            </div>
        </div>
    </div>
  );
};

<<<<<<< HEAD
export default Register;
=======
const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
>>>>>>> af47ae08ad28ae4410e4e11e059b824aa75e7216
