import React, {Component} from 'react';

class Details extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="lylich">
                <div className="col-30">
                    <div className="ava">
                        <img src={this.props.anhh} alt={1} />
                        <div className="name"><h4>{this.props.namee}</h4></div>
                    </div>
                    <div className="title">
                        <i className="fa fa-caret-right" aria-hidden="true" />
                    </div>
                </div>

                <div className="col-70">
                    <h3>Lý lịch khoa học</h3>
                    <table>
                        <tbody>
                            <tr>
                                <th>Họ và tên:</th>
                                <td>{this.props.namee}</td>
                            </tr>
                            <tr>
                                <th>Giới tính:</th>
                                <td>{this.props.gender}</td>
                            </tr>
                            <tr>
                                <th>Quê quán</th>
                                <td>{this.props.que}</td>
                            </tr>
                            <tr>
                                <th>Email:</th>
                                <td>{this.props.mail}</td>
                            </tr>
                            <tr>
                                <th>Số điện thoại:</th>
                                <td>{this.props.phone}</td>
                            </tr>
                            <tr>
                                <th>Đơn vị công tác</th>
                                <td>{this.props.dv}</td>
                            </tr>
                            <tr>
                                <th>Dạy CN</th>
                                <td>{this.props.cn}</td>
                            </tr>
                            <tr>
                                <th>Ngoại ngữ</th>
                                <td>{this.props.nn}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

export default Details;