import React, { Component , Fragment } from "react";
import {
  withRouter
} from 'react-router-dom'
import { Dropdown, Menu } from "semantic-ui-react";
import classes from "./Toolbar.module.css";

class Toolbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.history.push('/' + name)
  }

  componentDidUpdate = (prevProps) => {
    if(this.props.location !== prevProps.location) {
      this.onRouteChange();
    }
  }

  onRouteChange = () => {
    const pathname = this.props.location.pathname.replace(/^(\/)/g, '');
    this.setState({ activeItem: pathname });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Fragment>
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
      </Fragment>
    );
  }
}


export default withRouter(Toolbar)
