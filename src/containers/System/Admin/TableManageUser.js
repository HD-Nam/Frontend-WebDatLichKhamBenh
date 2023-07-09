import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageUser.scss';
import * as actions from "../../../store/actions"
// import { adminMenu } from '../Header/menuApp';
// import Navigator from '../../components/Navigator';
// import * as actions from "../../store/actions";
// import '../Header/Header.scss';

class TableManageUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersRedux: []
        }
    }

    componentDidMount() {
        this.props.fetchUserRedux();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                usersRedux: this.props.listUsers
            })
        }
    }

    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user.id);
    }

    handleEditUser = (user) => {
        this.props.handleEditUserFromParentKey(user);
    }

    render() {
        let arrUsers = this.state.usersRedux;
        // const { processLogout } = this.props;
        return (
            // <React.Fragment>
            //     <div className="header-container">
            //         {/* thanh navigator */}
            //         <div className="header-tabs-container">
            //             <Navigator menus={adminMenu} />
            //         </div>

            //         {/* nút logout */}
            //         <div className="btn btn-logout" onClick={processLogout}>
            //             <i className="fas fa-sign-out-alt"></i>
            //         </div>
            //     </div>
            // </React.Fragment>
            <table id="TableManageUser">
                <tbody>
                    <tr>
                        <th>Email</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                    {arrUsers && arrUsers.length > 0 &&
                        arrUsers.map((item, index) => {
                            return (
                                <tr key = {index} >
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button 
                                            onClick={() => this.handleEditUser(item)}
                                            className="btn-edit"><i className="fas fa-pencil-alt"></i></button>
                                        <button
                                            onClick={() => this.handleDeleteUser(item)}
                                            className="btn-delete" ><i className="fas fa-trash"></i></button>
                                    </td>
                                </tr>      
                            )
                        })
                    }
                </tbody>
            </table>
        );
    }

}

const mapStateToProps = state => {
    return {
        listUsers: state.admin.users
        // isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => { 
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
        deleteUserRedux: (id) => dispatch(actions.deleteUser(id)),
        // processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
