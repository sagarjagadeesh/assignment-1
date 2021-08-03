import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Task1 from "../views/Task1/index";
import Task2 from "../views/Task2/index";
import { ToastContainer, Zoom } from "react-toastify";
import Header from "../components/Header/Header";
import SideNavPage from "../components/SideNav/SideNav";

class Routes extends Component {
  state = {
    collapsed: true,
  };

  handleMinimize = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <>
        <Header collapsed={collapsed} handleMinimize={this.handleMinimize} />
        <div style={{ display: "flex" }}>
          <SideNavPage
            collapsed={collapsed}
            handleMinimize={this.handleMinimize}
          />
          <div
            className="main-div mail-dashboard-cont"
            style={
              !collapsed ? { marginLeft: "22rem" } : { marginLeft: "8rem" }
            }
          >
            <Switch>
              <Route exact path="/task1" component={Task1} />
              <Route exact path="/task2" component={Task2} />
              <Redirect from="/" to="/task1" />
              <Redirect to="/404" />
            </Switch>
          </div>
        </div>
      </>
    );
  }
}

export const MainRoutes = () => {
  let isThemeSelected = false;
  return (
    <div className={isThemeSelected ? "body-dark" : "body-light"}>
      <ToastContainer transition={Zoom} position="top-right" autoClose={5000} />
      <Switch>
        <Route path="/" component={Routes} />
      </Switch>
    </div>
  );
};
