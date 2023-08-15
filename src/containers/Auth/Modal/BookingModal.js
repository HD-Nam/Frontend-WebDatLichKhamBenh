import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import { emitter } from "../../utils/emitter";
// import register from '../../api/register';
import './BookingModal.scss';
import * as actions from '../../../store/actions';
import DatePicker from '../../../components/Input/DatePicker';
class BookingModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            phonenumber: '',
            email: '',
            address: '',
            reason: '',
            birthday: '',
            genders: '',
            selectedgender: '',
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
    handleOnChangeInput = (event, id) => {
        let valueInput = event.target.value;
        let stateCopy = { ...this.state };
        stateCopy[id] = valueInput
        this.setState({
            ...stateCopy
        })
    }
    handleOnCangeDatePcker = (date) => {
        this.setState({
            birthday: date[0]
        })
    }
    render() {
        let { isOpenModal, closeBookingModal, datatime } = this.props
        console.log('check state: data ', this.state)
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
                                    value={this.state.fullName}
                                    onChange={(event) => this.this.handleOnChangeInput(event, 'fullName')} />
                            </div>
                            <div className="col-6 input-container">
                                <label>Số điện thoai</label>
                                <input className="from-control"
                                    value={this.state.phonenumber}
                                    onChange={(event) => this.this.handleOnChangeInput(event, 'phonenumber')} />
                            </div>
                            <div className="col-6 input-container">
                                <label>Địa chỉ email</label>
                                <input className="from-control"
                                    value={this.state.email}
                                    onChange={(event) => this.this.handleOnChangeInput(event, 'email')} />
                            </div>
                            <div className="col-6 input-container">
                                <label>Địa chỉ liên hệ</label>
                                <input className="from-control"
                                    value={this.state.address}
                                    onChange={(event) => this.this.handleOnChangeInput(event, 'address')} />
                            </div>
                            <div className="col-12 input-container">
                                <label>Lý do khám</label>
                                <input className="from-control"
                                    value={this.state.reason}
                                    onChange={(event) => this.this.handleOnChangeInput(event, 'reason')} />
                            </div>
                            <div className="col-6 input-container">
                                <label>Ngày sinh</label>
                                <DatePicker className="from-control"
                                    value={this.state.birthday}
                                    onChange={this.handleOnCangeDatePcker}
                                />
                            </div>
                            <div>
                                <label className="a">
                                    Giới tính
                                </label>
                                <select name="Gioi-tinh" >
                                    <option value="Nam">Nam</option>
                                    <option value="Nu">Nữ</option>
                                </select>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter className="booking-modal-footer">
                        <button className="xacnhan" onClick={closeBookingModal}>Xác Nhận </button>
                        <button className="cancel" onClick={closeBookingModal}>Cancel</button>
                    </ModalFooter>
                </div >
            </Modal >
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
