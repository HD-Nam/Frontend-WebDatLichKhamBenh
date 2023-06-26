import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from "react-slick"

class HomeFooter extends Component {
 
    render() {

        return (
            <div className="home-footer">
                <p>&copy; 2023 Ho Duc Nam design. <a target="blank" href="https://www.facebook.com/profile.php?id=100017106722322">&#8594; Click here &#8592;</a></p>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
