import React, { Component } from 'react';
import Details from './details';

class Gioi extends Component {
  render() {
    return (
      <div>
        <Details anhh="http://scv.udn.vn/anh/131.004.00025122.jpg"
        namee="Nguyễn Văn Chức" gender="Nam" mail="chuc.nv@due.edu.vn; website: bis.net.vn" phone="0905357105"
        cn="Tin Học Quản Lý; Thương mại điện tử" que="Quảng Nam"
        dv="Khoa Thương mại điện tử; Trường Đại học Kinh tế" nn="Tiếng Anh"
        />
      </div>
    );
  }
}

export default Gioi