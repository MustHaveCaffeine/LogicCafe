import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Dropdown, Menu, Image } from "semantic-ui-react";
import classes from "./Toolbar.module.css";
import logo from "../../assets/images/logo_without_text.png";

class Toolbar extends Component {
    state = { activeItem: "home" };

    componentDidMount = () => {
        // this.onRouteChange();
    };

    componentDidUpdate = (prevProps) => {
        if (this.props.location !== prevProps.location) {
            this.onRouteChange();
        }
    };

    handleItemClick = (e, route, name) => {
        this.props.history.push("/" + route);
        this.setState({ activeItem: name });
    };

    onRouteChange = () => {
        const pathname =
            this.props.location.pathname.replace(/^(\/)/g, "") || "home";
        this.setState({ activeItem: pathname });
    };

    render() {
        const { activeItem } = this.state;

        return (
            <Fragment>
                <div className={classes.Toolbar}>
                    <Menu secondary>
                        <Menu.Item
                            header
                            name='home'
                            onClick={(event) =>
                                this.handleItemClick(event, "home", "home")
                            }>
                            <Image src={logo} centered size='mini' />
                            <span
                                style={{
                                    color: "#F08700",
                                    fontSize: "20px",
                                    marginLeft: "5px",
                                }}>
                                Logic Cafe
                            </span>
                        </Menu.Item>
                        <Menu.Item
                            name='problems'
                            style={{
                                color: "#F5A322",
                                fontWeight:
                                    activeItem === "problems" ? 900 : 400,
                                fontSize: "15px",
                            }}
                            active={activeItem === "problems"}
                            onClick={(event) =>
                                this.handleItemClick(event, "problems", "problems")
                            }
                        />
                        <Menu.Item
                            name='articles'
                            style={{
                                color: "#F5A322",
                                fontWeight:
                                    activeItem === "articles" ? 900 : 400,
                                fontSize: "15px",
                            }}
                            active={activeItem === "articles"}
                        />
                        <Menu.Item
                            name='discussions'
                            style={{
                                color: "#F5A322",
                                fontWeight:
                                    activeItem === "discussions" ? 900 : 400,
                                fontSize: "15px",
                            }}
                            active={activeItem === "discussions"}
                        />
                        <Menu.Item
                            name='publish'
                            style={{
                                color: "#F5A322",
                                fontWeight:
                                    activeItem === "publish" ? 900 : 400,
                                fontSize: "15px",
                            }}
                            active={activeItem === "publish"}
                            onClick={(event) =>
                                this.handleItemClick(event, "problems/publish", "publish")
                            }
                        />
                        <Menu.Menu position='right'>
                            <Dropdown
                                item
                                icon='bars'
                                simple
                                style={{ color: "#F5A322", fontSize: "15px" }}>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        My Submissions
                                    </Dropdown.Item>
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

export default withRouter(Toolbar);
