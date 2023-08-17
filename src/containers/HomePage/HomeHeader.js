import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { Link } from 'react-router-dom';

class HomeHeader extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <div className="logo"><i className="far fa-hospital"></i>  <Link to="/home" style={{ color: "black", textDecoration: "none" }}>BỆNH VIỆN A</Link>

                            </div>
                        </div>
                        <div className="center-content">
                            <div className="child-content">
                                <div>
                                    <Link to="/Detail-Specialty"><b style={{ color: "black", textDecoration: "none" }}>Chuyên khoa</b></Link>

                                </div>
                                <div className="subs-title">Tìm các bác sĩ theo từng chuyên khoa</div>
                            </div>
                            <div className="child-content">
                                <Link to="/list-doctor"><b style={{ color: "black", textDecoration: "none" }}>Bác sĩ</b></Link>

                                <div className="subs-title">Tìm các bác sĩ giỏi</div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="support"><i className="fas fa-question-circle"></i>Help</div>
                            <div className="logout">
                                <Link to="/Login">Đăng xuất</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-header-banner">
                    <div className="content-up">
                        <div className="title1">BỆNH VIỆN A</div>
                        <div className="title2">CHUYÊN NGHIỆP - TẬN TÂM - THÂN THIỆN</div>
                        <div className="search">
                            <i class="fas fa-search"></i>
                            <input type="text" placeholder="Tìm chuyên khoa khám bệnh" />
                        </div>
                    </div>
                    <div className="content-down">
                        <div className="options">
                            <div className="option-child">
                                <div className="icon-child"><i className="far fa-hospital"></i></div>
                                <div className="text-child">Khám chuyên khoa</div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child"><i className="fas fa-mobile-alt"></i></div>
                                <div className="text-child">Khám từ xa</div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child"><i className="fas fa-user-md"></i></div>
                                <div className="text-child">Sức khỏe tinh thần</div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
