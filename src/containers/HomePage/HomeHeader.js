import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';

class HomeHeader extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <div className="logo"><i className="far fa-hospital"></i>    BỆNH VIỆN A</div>
                        </div>
                        <div className="center-content">
                            <div className="child-content"> 
                                <div><b>Chuyên khoa</b></div>
                                <div className="subs-title">Tìm các bác sĩ theo từng chuyên khoa</div>
                            </div>
                            <div className="child-content">
                                <div><b>Bác sĩ</b></div>
                                <div className="subs-title">Tìm các bác sĩ giỏi</div>
                            </div>
                        </div> 
                        <div className="right-content">
                            <div className="support"><i className="fas fa-question-circle"></i>Help</div>
                            <div className="logout">
                                <span>Đăng xuất</span> 
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
        isLoggedIn: state.admin.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
