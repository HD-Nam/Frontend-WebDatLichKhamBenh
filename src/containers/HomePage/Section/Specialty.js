import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from "react-slick"
import { listSpecialist } from '../../../api/listSpecialist';
class Specialty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        // axios.get('https://project1backend-da705e13e21b.herokuapp.com/list/specialists')
        listSpecialist()
            .then(data => {
                this.setState({ data: data });

            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const { data } = this.state;
        {
            data.map((item, index) => (
                console.log(item.name)
            ))
        }
        return (
            <div className="section-share section-specialty">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">Chuyên khoa phổ biến</span>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            {data.map((item, index) => (
                                <div className="section-customize" style={{ paddingLeft: index === 0 ? '20px' : '0' }} key={index} >
                                    <div className="bg-image " style={{ backgroundImage: `url(${item.img})` }} />
                                    <div>{item.name}</div>
                                </div>
                            ))}

                        </Slider>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
