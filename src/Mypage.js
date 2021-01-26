import React, { Component } from "react";
const axios = require("axios");

class mypage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: "세션이 없습니다.",
    };
  }

  componentDidMount() {
    this.getMain();
  }

  getMain = () => {
    let url = "http://localhost:4000/main";
    axios.get(url).then((result) => {
      console.log("result: ", result);
      this.setState({
        session: result.session,
      });
    });
  };

  render() {
    return (
      <div>
        <h1>마이페이지</h1>
        <ul>
          <li>id: {this.props.info.id}</li>
          <li>session: {this.props.info.session}</li>
          <li>/main session: {this.props.mainSession}</li>
        </ul>
        <button onClick={this.props.changeLogout}>로그아웃</button>
      </div>
    );
  }
}

export default mypage;
