import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import { emitter } from "../../utils/emitter";
// import register from '../../api/register';
import './BookingModal.scss';
import * as actions from '../../../store/actions';
import DatePicker from '../../../components/Input/DatePicker';
import moment from 'moment';
import booking from '../../../api/bookingAppointment';
import Cookies from 'js-cookie';
// import { withRouter } from 'react-router-dom';
class BookingModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            dob: '',
            phoneNumber: '',
            // BHYT: '',
            address: '',
            username: '',
            time: '',
            date: '',
            reason: '',
            sex: '',
            idDoctor: '',
        }
    }
    // buildDataGender = (data) => {
    //     let result = [];
    // }
    // componentDidUpdate(prevProps, prevState) {
    //     if (this.props.length > 0) {
    //         let data = this.props.genders;
    //         data.map(item => {
    //             item.
    //             return item;
    //         })
    //     }
    //     if (this.props.genders !== prevProps.genders) {
    //         this.setState({
    //             genders: genders
    //         })
    //     }
    // }
    componentDidMount() {

    }
    componentDidUpdate(prevProps) {
        if (this.props.time !== prevProps.time) {
            this.setState({
                time: this.props.time
            });
        }
        if (this.props.date !== prevProps.date) {
            this.setState({
                date: this.props.date
            });
        }
    }
    handleButtonClick = () => {
        const iddoctorFromURL = this.props.match.params.id;
        this.setState({
            iddoctor: iddoctorFromURL
        });

        // Gọi API hoặc thực hiện các tác vụ khác dựa trên iddoctorFromURL
    }
    handleGenderChange = event => {
        const selectedSex = event.target.value;
        this.setState({
            sex: selectedSex
        });
    }
    handleSubmmit = () => {
        const data = this.state;
        booking(data, Cookies.get('userId'))

    }
    handleOnChangeInput = (event, id) => {
        let valueInput = event.target.value;
        let stateCopy = { ...this.state };
        stateCopy[id] = valueInput
        this.setState({
            ...stateCopy
        })
    }
    handleOnCangeDatePcker = (date) => {

        const formattedDate = moment(date[0]).format('YYYY-MM-DD');
        console.log('ngay sinh', formattedDate);
        this.setState({
            dob: formattedDate
        });
    }
    render() {
        const currentURL = window.location.href;
        const segments = currentURL.split('/');
        const id = segments[segments.length - 1];
        if (this.state.idDoctor !== id) {
            this.setState({
                idDoctor: id
            });
        }
        // console.log(id);

        let { isOpenModal, closeBookingModal } = this.props
        console.log('check state', this.state, closeBookingModal)
        return (
            <Modal
                isOpen={isOpenModal}
                className={'booking-modal-container'}
                size="lg"
                centered
                toggle={() => { this.toggle() }}
            >
                <div className="booking-modal-content">
                    <div className="booking-modal-header">
                        <span className="left">Thông Tin Đặt Lịch Khám</span>
                        <div className="right" onClick={closeBookingModal}><i className="fas fa-times"></i></div>
                    </div>
                    <ModalBody className="booking-modal-body">
                        <div className="doctor-infor">
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
                        <div className="price">
                            Giá Khám: 250.000 VNĐ
                        </div>
                        <div className="row">
                            <div className="col-6 input-container">
                                <label>Họ Tên</label>
                                <input className="from-control"
                                    value={this.state.name}
                                    onChange={(event) => this.handleOnChangeInput(event, 'name')} />
                            </div>
                            <div className="col-6 input-container">
                                <label>Số điện thoai</label>
                                <input className="from-control"
                                    value={this.state.phoneNumber}
                                    onChange={(event) => this.handleOnChangeInput(event, 'phoneNumber')} />
                            </div>
                            <div className="col-6 input-container">
                                <label>Địa chỉ email</label>
                                <input className="from-control"
                                    value={this.state.username}
                                    onChange={(event) => this.handleOnChangeInput(event, 'username')} />
                            </div>
                            <div className="col-6 input-container">
                                <label>Địa chỉ liên hệ</label>
                                <input className="from-control"
                                    value={this.state.address}
                                    onChange={(event) => this.handleOnChangeInput(event, 'address')} />
                            </div>
                            <div className="col-12 input-container">
                                <label>Lý do khám</label>
                                <input className="from-control"
                                    value={this.state.reason}
                                    onChange={(event) => this.handleOnChangeInput(event, 'reason')} />
                            </div>
                            <div className="col-6 input-container">
                                <label>Ngày sinh</label>
                                <DatePicker className="from-control"
                                    value={this.state.dob}
                                    onChange={this.handleOnCangeDatePcker}
                                    dateFormat="yyyy-MM-dd"
                                />
                            </div>
                            <div>
                                <label className="a">
                                    Giới tính
                                </label>
                                <select name="sex" value={this.state.sex} onChange={this.handleGenderChange} >
                                    <option value="">Chọn</option>

                                    <option value="nam">Nam</option>
                                    <option value="nữ">Nữ</option>
                                </select>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter className="booking-modal-footer">
                        <button className="xacnhan" onClick={this.handleSubmmit}>Xác Nhận </button>
                        {/* <button className="xacnhan" onClick={closeBookingModal}>Xác Nhận </button> */}
                        <button className="cancel" onClick={closeBookingModal}>Cancel</button>
                    </ModalFooter>
                </div>
            </Modal>
        );
    }

}

const mapStateToProps = state => {
    return {
        // genders: state.admin.genders,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        // getGenders: () => dispatch(actions.fetchGenderStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);
