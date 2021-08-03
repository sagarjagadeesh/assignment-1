import React, { Component } from "react";
import { ProSidebar, Menu, MenuItem, SidebarContent } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { RiDashboardLine } from "react-icons/ri";
import { IoAnalyticsOutline } from "react-icons/io5";
import "./SideNav.scss";
import { history } from "../../routes";

class SideNavPage extends Component {
  state = {
    sideNavLeft: false,
  };

  renderRoutes = (route) => {
    history.push(route);
  };

  render() {
    let routeIndex = window.location.pathname.split("/")[1];
    return (
      <ProSidebar collapsed={this.props.collapsed}>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem
              icon={<RiDashboardLine style={{ fontSize: "3rem" }} />}
              onClick={() => this.renderRoutes("/task1")}
              active={routeIndex === "task1"}
            >
              Task 1
            </MenuItem>
          </Menu>
          <Menu iconShape="square">
            <MenuItem
              icon={<IoAnalyticsOutline style={{ fontSize: "3rem" }} />}
              onClick={() => this.renderRoutes("/task2")}
              active={routeIndex === "task2"}
            >
              Task 2
            </MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    );
  }
}

export default SideNavPage;
