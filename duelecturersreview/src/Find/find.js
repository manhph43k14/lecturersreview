import React, { Component } from "react";
import { auth, database } from "../firebase";
import ResultList from "./resultList";
import { Button } from "react-bootstrap";

const Lecturers = "Lecturers";
const Subject = "Subject";
class Find extends Component {
  constructor(props) {
    super(props);
    this.database = database;
    this.auth = auth;
    this.state = {
      data: "",
      content: "",
      option: "",
    };
  }
  componentWillMount() {
    
  }

  componentDidMount() {
    var form = document.getElementById("item");
    form.addEventListener("click", () => {
      var option = this.refs.option.value;
      var search = document.getElementById("search");
      var btnFind = document.getElementById("btnFind");
      var result = document.getElementById("result");
   
      if (option != 0) {
        this.setState({
          option: option,
        });
        search.value = "";
        result.classList.add('hide');
        search.removeAttribute("disabled");
        btnFind.removeAttribute("disabled");
      } else {
        search.setAttribute("disabled", "disabled");
        btnFind.setAttribute("disabled", "disabled");
      }
    });
  }
  onChange = (event) => {
    
    var target = event.target;
    var value = target.value.toLowerCase();
    this.setState({
      content: value,
    });
    this.loadData(value,this.state.option);
    var result = document.getElementById("result");
    result.classList.add('hide');
  };

  loadData = (content,option) =>{
    switch (option){
      case Lecturers:
        this.database.ref(option).orderByChild('name')
        .equalTo(content)
        .on('value', (data) => {
          var array = data.val();
          for(let elm in array){
            if(array[elm].id!=null){
              this.database.ref(Subject).orderByChild('lec')
                .equalTo(array[elm].id)
                .on('value', (dataSub) => {
                  this.setState({
                    data:{
                      name : array[elm].name,
                      subject : dataSub.val()
                    }
                  })
              })
            }
          }

        })
        break;
      case Subject:
        this.database.ref(option).orderByChild('name')
        .equalTo(content)
        .on('value', (data) => {
          var array = data.val();
          for(let elm in array){
            console.log(array[elm].id)
            if(array[elm].id!=null){
              this.database.ref(Lecturers).orderByChild('id')
                .equalTo(array[elm].id)
                .on('value', (dataSub) => {
                  this.setState({
                    data:{
                      name : array[elm].name,
                      subject : dataSub.val()
                    }
                  })
              })
            }
          }

        })

        break;
    }
    setTimeout(5000);
  }

  find = () => {
    var option = this.refs.option.value;
    var content = document.getElementById("search").value;
    this.addFind(content,option)
    var result = document.getElementById("result");
    result.classList.remove('hide');
  };

  showResult = () =>{
    var data = this.state.data
    if(data!=""){
        return <ResultList
        name = {data.name}
        data = {data.subject}
        option = {this.state.option}
      >
      </ResultList>
    }
  }

  // add data to Firebase database
  addFind = (content, option) => {
    database.ref("Find/").push().set({
      Option: option,
      Content: content,
    });
  };


  render() {
    var { content } = this.state;
    return (
      <div className="box">
        <h3>Tìm kiếm</h3>
        <hr />
        <div className="timkiem" name="form-find">
          <select className="item" name="sel" id="item" ref="option">
            <option value={0}>-- Chọn chuyên mục --</option>
            <option value="Lecturers">Giảng viên</option>
            <option value="Subject">Môn học</option>
          </select>
          <br />
          <input
            disabled="disabled"
            type="search"
            id="search"
            placeholder="Nhập từ khóa"
            ref="content"
            value={content}
            onChange={this.onChange}
          />
          <Button
            id="btnFind"
            onClick={this.find.bind(this, "find()")}
            
            type="submit"
            variant="outline-secondary"
          >
            TÌM
          </Button>

          <div className="result-list" >
           <div id="result" className="hide" >
            {this.showResult()}
           </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Find;
