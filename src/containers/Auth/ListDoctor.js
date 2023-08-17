import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import './DetailSpecialty.scss';
import { Modal } from 'reactstrap';
import * as actions from "../../store/actions";
import BookingModal from './Modal/BookingModal';
import { withRouter } from 'react-router'
import moment from 'moment/moment';
import localization from 'moment/locale/vi'
import { FormattedMessage } from 'react-intl';
// import { userService } from '../../services/userService';import Select from 'react-select'
import { getAllDoctor } from '../../api/getAllDoctor';
import { Link } from 'react-router-dom';
import { findDoctor } from '../../api/findDoctor';
import { find, set } from 'lodash';
import { toast } from 'react-toastify';


class ListDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alldays: [],
            data: [],
            allAvailableTime: [],
            isOpenModalBooking: false,
            datasheduletimemodal: {}
        }
    }
    closeBookingModal = () => {
        this.setState({
            isOpenModalBooking: false
        })
    }
    HandleClickScheduleTime = (time) => {
        this.setState({
            isOpenModalBooking: true,
            datasheduletimemodal: time
        })
        console.log('modal: time: ', time)
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


        this.fetchDoctorData();
    }
    fetchDoctorData = () => {
        getAllDoctor()
            .then(data => {
                this.setState({ data: data });
                // Sau khi lấy dữ liệu từ API, bạn cũng có thể gọi hàm filterDoctors để lọc dữ liệu ban đầu
                // this.filterDoctors(this.state.searchQuery);
            })
            .catch(error => {
                console.log(error);
            });
    }
    returnToHome = () => {
        if (this.props.history) {
            this.props.history.push('/home')
        }
    }
    handleSearchInputChange = (event) => {
        const searchQuery = event.target.value;
        clearTimeout(this.typingTimer);


        // console.log('searchQuery: ', searchQuery);
        this.setState({ searchQuery: searchQuery });
        this.typingTimer = setTimeout(() => {
            // this.findDoctor(searchQuery); // Gọi hàm fetchDoctors thay vì findDoctor
            if (searchQuery === '') {
                // Gọi hàm khác khi ô input trống
                setTimeout(() => {
                    this.findDoctor();
                }, 10);
                // this.fetchDoctorData();
            } else {
                // Gọi API để tìm kiếm dựa trên searchQuery
                this.findDoctor(searchQuery);
            }
        }, 500);

        // this.findDoctor(searchQuery);
        // Gọi API để tìm kiếm dựa trên searchQuery
        // this.findDoctor(searchQuery);
    }
    findDoctor = async (searchQuery) => {
        findDoctor(searchQuery)
            .then(data => {
                console.log('data: ', data);
                if (data.length === 0) {
                    toast.error('Không tìm thấy bác sĩ nào');

                    this.fetchDoctorData();
                }
                else {


                    this.setState({ data: data });
                }
                // Sau khi lấy dữ liệu từ API, bạn cũng có thể gọi hàm filterDoctors để lọc dữ liệu ban đầu
                // this.filterDoctors(this.state.searchQuery);
            })
            .catch(error => {
                toast.error('Có lỗi sảy ra');
                this.fetchDoctorData();

                console.log(error);
            });
    }

    handleOnChangeSelect = (event) => {
        // if (this.props.match && this.props.match.params && this.props.match.params.id) {
        //     let doctorId = this.props.match.params.id;
        // }
        // console.log('event onchange date value: ', envent.target.value)

    }


    render() {
        const { data } = this.state;
        let { alldays, allAvailableTime, isOpenModalBooking, datasheduletimemodal } = this.state;
        let { language } = this.props;
        return (
            <div>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <div className="logo"><i className="far fa-hospital"></i>  <Link to="/" style={{ color: "black", textDecoration: "none" }}>BỆNH VIỆN A</Link>

                            </div>
                        </div>
                        <div className="center-content">
                            <div className="child-content">
                                <Link to="/Detail-Specialty"><b style={{ color: "black", textDecoration: "none" }}>Chuyên khoa</b></Link>
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
                                <span>Đăng xuất</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search">
                    <i class="fas fa-search"></i>
                    <input type="text" onChange={this.handleSearchInputChange} placeholder="Tìm Bác sĩ khám bệnh" />
                </div>
                {data.map((item, index) => (
                    <div className="detail-specialty-doctor" key={index}>
                        <div className="content-left">
                            <div className="intro-doctor">
                                <div className="content-left">
                                    <img src={item.img} className="bacsi">

                                    </img>

                                </div>
                                <div className="content-right">
                                    <div className="Up">
                                        {/* {item.ho_ten} */}
                                        <Link to={`/detail-doctor/${item.IDU}`} style={{ color: "black", textDecoration: "none" }}>{item.ho_ten}</Link>
                                    </div>
                                    <div className="Down">Nguyên Trưởng phòng chỉ đạo tuyến tại Bệnh viện Da liễu Trung ương Bác sĩ từng công tác tại Bệnh viện Da liễu Trung ương Nguyên Tổng Thư ký Hiệp hội Da liễu Việt Nam</div>
                                </div>
                            </div>
                        </div>
                        <div className="content-right">
                            <div className="schedule-doctor">
                                <div className="content-left1">
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
                                            <div className="a" onClick={() => this.HandleClickScheduleTime()}>
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
                                            {allAvailableTime && allAvailableTime.length > 0 &&
                                                allAvailableTime.map((item, index) => {
                                                    return (
                                                        <button key={index}>{ }</button>
                                                    )
                                                })}

                                            <div className="book-free">
                                                <span>Chọn <i className="far fa-hand-point-up"></i> và đặt miễn phí</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="doctor-extra-infor-container">
                                        <div className="content-up">
                                            <div className="text-address">{`${item.work_room} - ${item.specialist.address}`}</div>
                                            <div className="name-clinic"> {item.specialist.name}</div>
                                            <div className="phone-number">{`Liên hệ: ${item.specialist.phoneNumber}`}</div>
                                        </div>
                                        <div className="content-down">
                                            <div>GIÁ KHÁM: 250.000 VNĐ</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}


                <div className="comment">

                </div>
                <BookingModal
                    isOpenModal={isOpenModalBooking}
                    closeBookingModal={this.closeBookingModal}
                    datatime={datasheduletimemodal}>
                </BookingModal>
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
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListDoctor);
