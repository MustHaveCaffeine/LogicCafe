import React, { Component } from "react";
import { Divider, Dropdown, Menu } from "semantic-ui-react";
import classes from "./Toolbar.module.css";

export default class Toolbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <React.Fragment>
        <div className={classes.Toolbar}>
          <Menu secondary>
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="problems"
              active={activeItem === "problems"}
              onClick={this.handleItemClick}
            />
            <Menu.Menu position="right">
              <Dropdown item icon="bars" simple>
                <Dropdown.Menu>
                  <Dropdown.Item>My Submissions</Dropdown.Item>
                  <Dropdown.Item>Account</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Sign Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          </Menu>
        </div>
        <Divider />
      </React.Fragment>
    );
  }
}
