import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import register from '../../api/register';
import './Register.scss';
const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    sex: '',
    phoneNumber: '',
    BHYT: '',
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
    register(formData);
  };

  return (
    <div className="background-image-re">
      <div className="container-re">
        <div className="register-re">
          <h2>Đăng ký</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Họ và tên:
              <input type="text" name="name" value={formData.firstName} onChange={handleChange} />
            </label>
            <label>
              Ngày sinh:
              <input type="date" name="dob" value={formData.birthDate} onChange={handleChange} />
            </label>
            <label>
              Giới tính:
              <select name="sex" value={formData.gender} onChange={handleChange}>
                <option value="">Chọn giới tính</option>
                <option value="nam">Nam</option>
                <option value="nu">Nữ</option>

              </select>
            </label>
            <label>
              Số điện thoại:
              <input type="text" name="phoneNumber" value={formData.bhytNumber} onChange={handleChange} />
            </label>
            <label>
              Số BHYT:
              <input type="text" name="BHYT" value={formData.bhytNumber} onChange={handleChange} />
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

