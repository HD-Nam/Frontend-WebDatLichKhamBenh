import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux'
import { ToastContainer } from 'react-toastify';
import { userIsAuthenticated, userIsNotAuthenticated } from '../hoc/authentication';
import { path } from '../utils'
import Login from './Auth/Login';
<<<<<<< HEAD
import Home from '../routes/Home';
=======

>>>>>>> 834eeda42346b6a8f44ff3bba3e5ae65657bb71c
import Register from './Auth/Register';
import ForgotPassword from './Auth/ForgotPassword';
import HomeHeader from './HomePage/HomeHeader';
import DetailDoctor from './Auth/DetailDoctor';
// import DetailDoctor from '../../detailDoctor';

// import Header from './Header/Header';
import System from '../routes/System';
import { CustomToastCloseButton } from '../components/CustomToast';
import HomePage from './HomePage/HomePage.js';
import CustomScrollbars from "../components/CustomScrollbars";
import DetailSpecialty from './Auth/DetailSpecialty';
import ListDoctor from './Auth/ListDoctor';

class App extends Component {

    handlePersistorState = () => {
        const { persistor } = this.props;
        let { bootstrapped } = persistor.getState();
        if (bootstrapped) {
            if (this.props.onBeforeLift) {
                Promise.resolve(this.props.onBeforeLift())
                    .then(() => this.setState({ bootstrapped: true }))
                    .catch(() => this.setState({ bootstrapped: true }));
            } else {
                this.setState({ bootstrapped: true });
            }
        }
    };

    componentDidMount() {
        this.handlePersistorState();
    }

    render() {
        return (
            <Fragment>
                <Router history={history}>
                    <div className="main-container">
                        <div className="content-container">
                            <CustomScrollbars style={{ height: '100vh', width: '100%' }}>
                                <Switch>
                                    <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
                                    <Route path={path.HOME} exact component={(Home)} />
                                    <Route path={path.REGISTER} component={userIsNotAuthenticated(Register)} />
                                    <Route path={path.FORGOTPASSWORD} component={userIsNotAuthenticated(ForgotPassword)} />
                                    <Route path={path.HOMEHEADER} component={userIsNotAuthenticated(HomeHeader)} />
                                    <Route path={path.SYSTEM} component={(System)} />
                                    <Route path={path.HOMEPAGE} component={HomePage} />
                                    <Route path={path.DETAILDOCTOR} component={DetailDoctor} />

                                    <Route path={path.DETAILSPECIALTY} component={DetailSpecialty} />
                                    <Route path={path.LISTDOCTOR} component={ListDoctor} />

                                </Switch>
                            </CustomScrollbars>
                        </div>



                        <ToastContainer
                            position="bottom-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                    </div>
                </Router>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        started: state.app.started,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
