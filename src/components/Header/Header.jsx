import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Header.scss";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

class Header extends React.Component {
  state = {
    curTime: "",
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        curTime: new Date().toLocaleString(),
      });
    }, 1000);
  }

  render() {
    const { collapsed } = this.props;
    return (
      <Navbar
        bg="light"
        expand="lg"
        style={
          collapsed
            ? { padding: "1rem 4rem 1rem 10rem" }
            : { padding: "1rem 4rem 1rem 23rem" }
        }
      >
        {collapsed ? (
          <AiOutlineMenuUnfold
            className="icon"
            onClick={this.props.handleMinimize}
          />
        ) : (
          <AiOutlineMenuFold
            className="icon"
            onClick={this.props.handleMinimize}
          />
        )}

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            style={{ display: "flex", alignItems: "center" }}
            className="ml-auto"
          >
            <NavDropdown
              title={<CgProfile className="profile-pic" />}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item className="profile-name">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <CgProfile className="profile-pic-2" />
                  <div>
                    <div>Smart Cow</div>
                  </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Sign Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
