import React, {Component} from 'react';

class Find extends Component {
    render() {
        return (
            <div className="box">
                <h3>Tìm kiếm</h3>
                <hr />
                <div className="timkiem">
                    <input type="search" id="search" placeholder="Nhập từ khóa" />
                    <select className="item" id="item">
                        <option value={0}>-- Chọn chuyên mục --</option>
                        <option value="Lecturers">Giảng viên</option>
                        <option value="Subject">Môn học</option>
                        <option value="Major">Chuyên ngành</option>
                        <option value="Faculty">Khoa - Phòng</option>
                    </select><br />
                    <button type="submit" id="btnFind">TÌM</button>
                    <li><a href="../comment/comment.html">Comment</a></li>
                </div>
            </div>

        );
    }
}

export default Find;