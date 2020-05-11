import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const settings1={
            dots:true,
            infinite:true,
            speed: 300,
            slidesToShow:1,
            slideToScroll:1
        }
        return (
            <div className="body">
                <Slider {...settings1}>
                    <div className="item">
                        <img src="https://www.arcgis.com/sharing/rest/content/items/6c036c09c490450db100cbf867c7688a/resources/1571940616424.png?w=3340" alt="none"/>
                    </div>
                    <div className="item item-position">
                        <img src="https://qmpg.net/wp-content/uploads/2017/04/employee-training-budget-1200x630-OG.jpg" alt="none"/>
                    </div>
                </Slider>

                {/* Container */}
                <div className="container-fluid padding">
                    <div className="row padding">
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.0-9/65393176_10219297781498243_6920570719185141760_n.jpg?_nc_cat=100&_nc_sid=7aed08&_nc_ohc=hTLy9zftNLQAX_r1f9w&_nc_ht=scontent.fdad3-3.fna&oh=f803c712725975fed16f292dc38d740c&oe=5EC915E8" alt="1"/>
                                <div className="card-body">
                                    <h4 className="card-title">Cao Thị Nhâm</h4>
                                    <p className="card-text">Là giảng viên khoa Thống kê - Tin học </p>
                                    <Link to="/nham" className="btn btn-outline-secondary">See profile</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="https://scontent.fdad3-1.fna.fbcdn.net/v/t1.0-9/48358060_10156835642429730_6355960717954252800_o.jpg?_nc_cat=102&_nc_sid=7aed08&_nc_ohc=SEqenbNDyLgAX9zxhlj&_nc_ht=scontent.fdad3-1.fna&oh=822c09ac995618a429b808141d2be116&oe=5EC97476" alt="1"/>
                                <div className="card-body">
                                    <h4 className="card-title">Nguyễn Thành Thuỷ</h4>
                                    <p className="card-text">Là giảng viên khoa Thống kê - Tin học </p>
                                    <Link to="/thuy" className="btn btn-outline-secondary">See profile</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/95914307_3104686186221539_7278817849764741120_n.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=LIhAo6Ns--YAX-9I4FZ&_nc_ht=scontent.fdad1-1.fna&oh=0c4276303ac7a07b3b0e33f05c71d1d4&oe=5EDA246F" alt="1"/>
                                <div className="card-body">
                                    <h4 className="card-title">Nguyễn Văn Chức</h4>
                                    <p className="card-text">Là giảng viên khoa Thương mại điện tử </p>
                                    <Link to="/chuc" className="btn btn-outline-secondary">See profile</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Home;