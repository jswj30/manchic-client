import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import Signin from "./Signin";
import Signup from "./Signup";
import Mypage from "./Mypage";
// const axios = require("axios");
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      mainSession: "세션이 없습니다.",
      info: "",
    };
  }

  componentDidMount() {
    this.getMain();
  }

  // getMain = () => {
  //   let url = "http://localhost:4000/main";
  //   return axios
  //     .get(url)
  //     .then((result) => {
  //       console.log("result: ", result);
  //       this.setState({
  //         info: result.data,
  //         mainSession: result,
  //         isLogin: true,
  //       });
  //     })
  //     .catch((err) => {
  //       if (err.response.status === 401) {
  //         this.setState({
  //           isLogin: false,
  //         });
  //         this.props.history.push("/signin");
  //       }
  //     });
  // };

  changeLogin = (e) => {
    // this.setState({
    //   isLogin: true,
    //   info: e,
    // });
    this.getMain();
  };

  changeLogout = () => {
    let url = "http://localhost:4000/signout";
    axios.post(url).then((result) => {
      this.setState({
        isLogin: false,
        info: "",
      });
      this.props.history.push("/");
    });
  };

  render() {
    const { isLogin } = this.state;
    return (
      <div>
        <Switch>
          <Route
            exact={true}
            path="/"
            render={() => {
              if (isLogin) {
                return <Redirect to="/mypage" />;
              }
              return <Redirect to="/signin" />;
            }}
          />
          <Route
            path="/signin"
            render={() => <Signin changeLogin={this.changeLogin} />}
          />
          <Route
            path="/mypage"
            render={() => (
              <Mypage
                getMain={this.getMain}
                changeLogout={this.changeLogout}
                info={this.state.info}
                mainSession={this.state.mainSession}
              />
            )}
          />
          <Route path="/signup" render={() => <Signup />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
