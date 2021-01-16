import React, { Component } from "react";
import { withRouter } from "react-router-dom";
const axios = require("axios");

class Signup extends Component {
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

  handleSignup = () => {
    let { email, password } = this.state;
    if (!email || !password) {
      alert("모든 정보를 입력해주세요.");
    } else {
      let url = "http://localhost:4000/signup";
      axios
        .post(url, {
          email: email,
          password: password,
        })
        .then((result) => {
          this.setState({
            email: "",
            password: "",
          });
          alert("회원가입이 완료되었습니다.");
          this.props.history.push("/");
        })
        .catch((err) => {
          alert("중복된 Email입니다.");
        });
    }
  };

  render() {
    return (
      <div>
        <h1>Signup</h1>
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
        <button onClick={this.handleSignup}>회원가입</button>
      </div>
    );
  }
}

export default withRouter(Signup);
