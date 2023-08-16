import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from "../../utils/emitter";
import register from '../../api/register';
import _ from 'lodash';

class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            dob: "",
            sex: "",
            phoneNumber: "",
            BHYT: "",
            address: "",
            username: "",
            password: ""
        }
    }

    componentDidMount() {
        let user = this.props.currentUser;
        if (user && !_.isEmpty(user)) {
            this.setState({
                name: user.name,
                dob: user.dob,
                sex: user.sex,
                phoneNumber: user.phoneNumber,
                BHYT: user.BHYT,
                address: user.address,
                username: user.username,
                password: "hardcode",
            })
        }
        
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnChageInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        });
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['name', 'dob', 'sex', 'phoneNumber', 'BHYT', 'address', 'username', 'password'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            this.props.editUser(this.state);
        }
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size="lg"
            >
                <ModalHeader toggle={() => { this.toggle() }}>Edit a new user</ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label>name</label>
                            <input
                                type="text"
                                onChange={(event) => { this.handleOnChageInput(event, "name") }}
                                value={this.state.name}
                            />
                        </div>
                        <div className="input-container">
                            <label>date of birth</label>
                            <input
                                type="date"
                                onChange={(event) => { this.handleOnChageInput(event, "dob") }}
                                value={this.state.dob}
                            />
                        </div>
                        <div className="input-container">
                            <label>gender</label>
                            <input
                                type=""
                                onChange={(event) => { this.handleOnChageInput(event, "sex") }}
                                value={this.state.sex}
                            />
                        </div>
                        <div className="input-container">
                            <label>Phone Number</label>
                            <input
                                type="text"
                                onChange={(event) => { this.handleOnChageInput(event, "phoneNumber") }}
                                value={this.state.phoneNumber}
                            />
                        </div>
                        <div className="input-container">
                            <label>BHYT</label>
                            <input
                                type="text"
                                onChange={(event) => { this.handleOnChageInput(event, "BHYT") }}
                                value={this.state.BHYT}
                            />
                        </div>
                        <div className="input-container">
                            <label>address</label>
                            <input
                                type="text"
                                onChange={(event) => { this.handleOnChageInput(event, "address") }}
                                value={this.state.address}
                            />
                        </div>
                        <div className="input-container">
                            <label>username</label>
                            <input
                                type="text"
                                onChange={(event) => { this.handleOnChageInput(event, "username") }}
                                value={this.state.username}
                                disabled
                            />
                        </div>
                        <div className="input-container">
                            <label>password</label>
                            <input
                                type="text"
                                onChange={(event) => { this.handleOnChageInput(event, "password") }}
                                value={this.state.password}
                                disabled
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        className="px-3"
                        onClick={() => { this.handleSaveUser() }}
                    >Save Changes</Button>{' '}
                    <Button color="secondary" className="px-3" onClick={() => { this.toggle() }}>Close</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
