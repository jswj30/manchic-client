import React, { Component } from "react";

class mypage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>마이페이지</h1>
        <ul>
          <li>id: {this.props.info.id}</li>
          <li>session: {this.props.info.session}</li>
        </ul>
        <button onClick={this.props.changeLogout}>로그아웃</button>
      </div>
    );
  }
}

export default mypage;
