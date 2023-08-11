import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';

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
            </div>
        </div>
    </div>
  );
};

export default Register;
