import React, {Component} from 'react';

class Details extends Component {
    render() {
        return (
            <div className="lylich">
                <div className="col-30">
                    <div className="ava">
                        <img src="http://scv.udn.vn/anh/2018/1135-2018m03d05_6_19_7.jpg" alt={1} />
                        <div className="name"><h6>Lê Diên Tuấn</h6></div>
                    </div>
                    <div className="title">
                        <i className="fa fa-caret-right" aria-hidden="true" />
                    </div>
                </div>

                <div className="col-70">
                    <h3>Lý lịch khoa học</h3>
                    <table>
                        <tbody><tr>
                            <th>Họ và tên:</th>
                            <td>Lê Diên Tuấn</td>
                        </tr>
                        <tr>
                            <th>Giới tính:</th>
                            <td>Nam</td>
                        </tr>
                        <tr>
                            <th>Email:</th>
                            <td>ledientuan@due.edu.vn</td>
                        </tr>
                        <tr>
                            <th>Số điện thoại:</th>
                            <td>Chưa cập nhật</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

export default Details;