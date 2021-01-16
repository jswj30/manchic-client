import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Signin from "./Signin";
import Mypage from "./Mypage";
const axios = require("axios");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      info: "",
    };
  }

  changeLogin = (e) => {
    this.setState({
      isLogin: true,
      info: e,
    });
  };

  changeLogout = () => {
    let url = "http://localhost:4000";
    axios.get(url).then((result) => {
      this.setState({
        isLogin: false,
        id: "",
        session: "",
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
              <Mypage changeLogout={this.changeLogout} info={this.state.info} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
