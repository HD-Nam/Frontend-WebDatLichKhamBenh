import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { getAllUsers, createNewUserService, deleteUserService } from '../../services/userService';
import ModalUser from './ModalUser';
import { emitter } from "../../utils/emitter";
import { getAllUsersFromReact } from '../../api/getAllUser';

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
        }
    }

    async componentDidMount() {
        const users = await getAllUsersFromReact();
        this.setState({ arrUsers: users })

    }



    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true,
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }

    createNewuser = async (data) => {
        try {
            let response = await createNewUserService(data);
            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            } else {
                await this.getAllUsersFromReact();
                this.setState({
                    isOpenModalUser: false
                })

                emitter.emit('EVENT_CLEAR_MODAL_DATA')
            }
        } catch (e) {
            console.log(e)
        }
    }

    handleDeleteUser = async (user) => {
        console.log(user.IDU)
        try {
            let res = await deleteUserService(user.IDU);
            if (res && res.errCode === 0) {
                await this.getAllUsersFromReact();
            }
            else {
                alert(res.errMessage)
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        let arrUsers = this.state.arrUsers;
        console.log(arrUsers)
        return (
            <div className="users-container">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent={this.toggleUserModal}
                    createNerUser={this.createNewuser}
                />
                <div className="title text-center">Manage users</div>
                <div className="mx-1">
                    <button
                        className="btn btn-primary px-3"
                        onClick={() => this.handleAddNewUser()}
                    ><i className="fas fa-plus"></i>Add new users</button>
                </div>
                <div className="users-table mt-3 mx-1">
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>IDU</th>
                                <th>Name</th>
                                <th>Date of birth</th>
                                <th>gender</th>
                                <th>Phone Number </th>
                                <th>BHYT</th>
                                <th>Address</th>
                                <th>role</th>
                                <th>IDCK</th>
                                <th>Username</th>
                                <th>Action</th>
                            </tr>
                            {arrUsers.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.IDU}</td>
                                        <td>{item.ho_ten}</td>
                                        <td>{item.ntns}</td>
                                        <td>{item.gioi_tinh}</td>
                                        <td>{item.sdt}</td>
                                        <td>{item.so_BHYT}</td>
                                        <td>{item.dia_chi}</td>
                                        <td>{item.role}</td>
                                        <td>{item.IDCK}</td>
                                        <td>{item.username}</td>
                                        <td>
                                            <button className="btn-edit"><i className="fas fa-pencil-alt"></i></button>
                                            <button className="btn-delete" onClick={() => this.handleDeleteUser(item)}><i className="fas fa-trash"></i></button>
                                        </td>
                                    </tr>

                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
