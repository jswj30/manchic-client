import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import signin from "./signin";
import mypage from "./mypage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

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
          <Route path="/signin" component={signin} />
          <Route path="/mypage" component={mypage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
