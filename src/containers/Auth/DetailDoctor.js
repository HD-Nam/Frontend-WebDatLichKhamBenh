// import HomeHeader from '../Header/Header';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import './DetailDoctor.scss';
import { Modal } from 'reactstrap';
import * as actions from "../../store/actions";
import { withRouter } from 'react-router'
import moment from 'moment/moment';
import localization from 'moment/locale/vi'
import { FormattedMessage } from 'react-intl';
// import { userService } from '../../services/userService';import Select from 'react-select'

class DetailDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alldays: [],
            allAvailableTime: [],
        }
    }
    async componentDidMount() {
        let { language } = this.props;
        console.log('moment vie: ', moment(new Date()).format('dddd - DD/MM'));
        console.log('moment en: ', moment(new Date()).locale('en').format("ddd - DD/MM"));
        let alldays = []
        for (let i = 0; i < 7; i++) {
            let Object = {};
            Object.label = moment(new Date()).add(i, 'days').format('dddd - DD/MM');
            Object.value = moment(new Date()).add(i, 'days').startOf('day').valueOf();
            alldays.push(Object);
        }
        this.setState({
            alldays: alldays,
        })
    }
    returnToHome = () => {
        if (this.props.history) {
            this.props.history.push('/home')
        }
    }
    handleOnChangeSelect = (event) => {
        console.log('event onchange date value: ', event.target.value)
    }


    render() {
        let { alldays, allAvailableTime } = this.state;
        let { language } = this.props;
        return (
            <div className="doctor-detail-container">
                <div className="intro-doctor">
                    <div className="content-left">
                        <img src="https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg" className="bacsi">

                        </img>

                    </div>
                    <div className="content-right">
                        <div className="Up">
                            Phó Giáo Sư Nguyễn Văn A
                        </div>
                        <div className="Down">Nguyên Trưởng phòng chỉ đạo tuyến tại Bệnh viện Da liễu Trung ương Bác sĩ từng công tác tại Bệnh viện Da liễu Trung ương Nguyên Tổng Thư ký Hiệp hội Da liễu Việt Nam</div>
                    </div>
                </div>

                <div className="schedule-doctor">
                    <div className="content-left">
                        <select onChange={(event) => this.handleOnChangeSelect(event)}>
                            {alldays && alldays.length > 0 &&
                                alldays.map((item, index) => {
                                    return (
                                        <option value={item.value} key={index}>{item.label}</option>
                                    )
                                })}
                        </select>
                        <div className="all-available-time">
                            <div className="text-calendar">
                                <i className="fas fa-calendar-alt"> <span>Lịch Khám</span></i>
                            </div>
                            <div className="time-content">
                                <div className="a">
                                    <button>6:00 - 7:00</button>
                                    <button>7:00 - 8:00</button>
                                    <button>8:00 - 9:00</button>
                                    <button>9:00 - 10:00</button>
                                    <button>10:00 - 11:00</button>
                                    <button>11:00 - 12:00</button>
                                    <button>12:00 - 13:00</button>
                                    <button>13:00 - 14:00</button>
                                    <button>14:00 - 15:00</button>
                                </div>
                                {/* {allAvailableTime && allAvailableTime.length > 0 &&
                                        allAvailableTime.map((item, index) => {
                                            return (
                                                <button key={index}>{ }</button>
                                            )
                                        })} */}

                                <div className="book-free">
                                    <span>Chọn <i className="far fa-hand-point-up"></i> và đặt miễn phí</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-right">
                        <div className="doctor-extra-infor-container">
                            <div className="content-up">
                                <div className="text-address">ĐỊA CHỈ PHÒNG KHÁM</div>
                                <div className="name-clinic"> Phòng Khám Chuyên Khoa Da liễu</div>
                                <div className="detail-address">abc - xyz - Hà Nội</div>
                            </div>
                            <div className="content-down">
                                <div>GIÁ KHÁM: 250.000 VNĐ</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                    isOpen={false}
                    className="booking"
                    size="lg"
                    centered
                >
                    <div className="booking-modal-content">
                        <div className="booking-modal-header">
                            <span className="left">Thông tin đặt lịch khám bệnh</span>
                            <span className="right"><i className="far fa-times"></i></span>
                        </div>
                        <div className="booking-modal-body">
                            adddasdasda
                        </div>
                        <div className="booking-modal-footer">
                            dasdas
                        </div>
                    </div>
                </Modal>
                <div className="detail-infor-doctor">
                    <div className="tt">
                        Phó Giáo sư, Tiến sĩ, Bác sĩ Cao cấp Nguyễn Duy Hưng
                    </div>
                    <div className="a">
                        <li>
                            Bác sĩ từng công tác tại Bệnh viện Da liễu Trung ương
                        </li>
                        <li>
                            Nguyên Trưởng phòng chỉ đạo tuyến tại Bệnh viện Da liễu Trung ương
                        </li>
                        <li>
                            Đạt chứng chỉ Diploma về Da liễu tại Viện da liễu Băng Cốc - Thái Lan
                        </li>
                        <li>
                            Bác sĩ thường xuyên tham gia các Hội thảo, Hội nghị Quốc tế về Da liễu
                        </li>
                        <li>
                            Hội viên của Hội Da liễu Đông Nam Á, Châu Á và Thế giới
                        </li>
                        <li>
                            Giảng viên bộ môn Da liễu tại Đại Học Y Hà Nội
                        </li>
                        <li>
                            Trưởng Bộ môn Da liễu, Trường Đại học Kinh doanh và Công nghệ
                        </li>
                        <li>
                            Tốt nghiệp Đại học Y Hà Nội (1977)
                        </li>
                        <li>
                            Nguyên Tổng Thư ký Hiệp hội Da liễu Việt Nam
                        </li>

                    </div>
                    <div className="b">
                        Phó Giáo sư khám và điều trị
                    </div>
                    <div className="c">
                        <li>
                            Trứng cá thông thường thanh thiếu niên, người lớn, trứng cá do thuốc, mỹ phẩm, do bôi corticord, các thể bệnh trứng cá nặng, trứng cá đỏ (rosacea)
                        </li>
                        <li>
                            Điều trị da phục hồi da tổn hại do trứng cá, sẹo trứng cá
                        </li>
                        <li>
                            Các bệnh lý da mặt: viêm da dị ứng, tổn hại da do sử dụng mỹ phẩm, do corticord, lão hóa da
                        </li>
                        <li>
                            Nám da, tàn nhang, sạm da, các bệnh da tăng sắc tố sau viêm, sau trứng cá, do mỹ phẩm
                        </li>
                        <li>
                            Viêm da dị ứng, viêm da tiếp xúc, viêm da dầu
                        </li>
                    </div>
                </div>
                <div className="comment-doctor">

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
        // userDetailDoctorFail: () => dispatch(actions.adminDetailDoctorFail()),
        userDetailDoctorSuccess: (userInfo) => dispatch(actions.userDetailDoctorSuccess(userInfo))
    };


};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailDoctor));
