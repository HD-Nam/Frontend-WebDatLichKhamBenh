import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.scss'; 

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setIsSubmitted(true);
  };

  return (
    <div className="background-image-fo">
      <div className="container-fo">
        <div className="forgot-password-page">
          <h2>Quên mật khẩu</h2>
          {isSubmitted ? (
            <p className="success-message">Yêu cầu đã được gửi. Vui lòng kiểm tra email của bạn.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <label>
                Email:
                <input type="email" value={email} onChange={handleChange} />
              </label>
              <button type="submit">Gửi yêu cầu</button>
            </form>
          )}
          <Link to="/Login">Quay lại trang đăng nhập</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;


