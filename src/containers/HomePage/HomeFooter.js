import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from "react-slick"

class HomeFooter extends Component {
 
    render() {

        return (
            <div className="home-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Bệnh viện A</h3>
                            <p>Bệnh viện A cung cấp các dịch vụ y tế chất lượng cao cho cộng đồng,</p>
                            <p>giúp cộng đồng có thể đặt lịch khám một cách nhanh chóng và hiệu quả nhất.</p>
                        </div>
                        <div className="col-md-6">
                            <h3>Liên hệ</h3>
                            <p>Địa chỉ: 123 Đường A, Thành phố B</p>
                            <p>Số điện thoại: 0123456789</p>
                            <p>Email: benhvienA@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

} 

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
