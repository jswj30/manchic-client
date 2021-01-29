import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Signup from "./Signup";
const axios = require("axios");

axios.defaults.withCredentials = true;

class signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  changeValue = (key) => (e) => {
    this.setState({
      [key]: e.target.value,
    });
  };

  login = () => {
    let { email, password } = this.state;
    if (!email || !password) {
      alert("모든 정보를 입력해주세요.");
    } else {
      let url = "http://localhost:4000/signin";
      axios
        .post(url, {
          email: email,
          password: password,
        })
        .then((result) => {
          let { data } = result;
          console.log(data);
          this.props.handleUserInfo(data);
          this.props.changeLogin();
          this.props.history.push("/");
        })
        .catch((err) => {
          alert("로그인 실패");
          console.log(err);
        });
    }
  };

  render() {
    return (
      <div>
        <h1>Signin</h1>
        <div>
          Email
          <input
            type="text"
            placeholder="Email을 입력하세요."
            onChange={this.changeValue("email")}
          />
        </div>
        <div>
          Password
          <input
            type="password"
            placeholder="Password를 입력하세요."
            onChange={this.changeValue("password")}
          />
        </div>
        <button onClick={this.login}>로그인</button>
        <button onClick={this.login}>회원가입</button>
      </div>
    );
  }
}

export default withRouter(signin);
