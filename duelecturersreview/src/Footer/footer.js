import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="col-lg-5">
                    <h3 className="foot">Giới thiệu</h3>
                    <div className="introduce">
                        <Link to="/"><img className="logo" src="https://scontent.fdad2-1.fna.fbcdn.net/v/t31.0-8/10947451_882935715096795_3355128569306577293_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=eekrH6Qb4l4AX8cIWEH&_nc_ht=scontent.fdad2-1.fna&oh=8412bf90a38f477f569d39aacf33618c&oe=5EDC2E3D" alt="logo" /></Link>
                        <p>Xin chào các bạn, nhóm chúng mình tạo ra website này để sinh viên có thể vào xem thông tin của giảng viên với các feedback mà sinh viên khóa trước đã review và để đăng kí học phần với giảng viên phù hợp cho bản thân.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <h3 className="foot">Các liên kết khác</h3>
                    <ul className="links">
                        <li><a href="https://due.udn.vn/">Trường Đại học Kinh tế Đà Nẵng</a></li>
                        <li><a href="http://scv.udn.vn/dhdn/trdhkt">Thông tin giảng viên</a></li>
                        <li><a href="http://elearning2.due.edu.vn:9999/my/">Elearning2</a></li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <h3 className="foot">Kết nối</h3>
                    <a href="https://www.facebook.com/FaceDue/"><i className="fa fa-facebook-square" aria-hidden="true" /></a>
                </div>
                <p className="right">Bản quyền nhóm DUE LECTURERS REVIEW.</p>
            </footer>

        );
    }
}

export default Footer;