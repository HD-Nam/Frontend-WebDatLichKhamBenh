import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick"
import { getAllDoctor } from '../../../api/getAllDoctor';

class OutStandingDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        // axios.get('https://project1backend-da705e13e21b.herokuapp.com/list/specialists')
        getAllDoctor()
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
            <div className="section-share section-outstanding-doctor">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">Bác sĩ nổi bật</span>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            {data.map((item, index) => (
                                <div className="section-customize" style={{ paddingLeft: index === 0 ? '20px' : '0' }} key={index} >
                                    <div className="customize-border">
                                        <div className="outer-bg">
                                            <div className="bg-image section-outstanding-doctor" style={{ backgroundImage: `url(${item.img})` }} />
                                        </div>
                                        <div className="position text-center">
                                            <div>{item.ho_ten}</div>
                                            <div>{item.IDCK}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-doctor" />
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo Sư-Tiến Sĩ Nguyễn Văn A</div>
                                        <div>RĂNG HÀM MẶT 1</div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-doctor" />
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo Sư-Tiến Sĩ Nguyễn Văn A</div>
                                        <div>RĂNG HÀM MẶT 2</div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-doctor" />
                                        </div>
                                    <div className="position text-center">
                                        <div>Giáo Sư-Tiến Sĩ Nguyễn Văn A</div>
                                        <div>RĂNG HÀM MẶT 3</div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-doctor" />
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo Sư-Tiến Sĩ Nguyễn Văn A</div>
                                        <div>RĂNG HÀM MẶT 4</div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-doctor" />
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo Sư-Tiến Sĩ Nguyễn Văn A</div>
                                        <div>RĂNG HÀM MẶT 5</div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-doctor" />
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo Sư-Tiến Sĩ Nguyễn Văn A</div>
                                        <div>RĂNG HÀM MẶT 6</div>
                                    </div>
                                </div>
                            </div> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
