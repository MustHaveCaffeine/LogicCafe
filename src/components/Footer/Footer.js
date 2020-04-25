import React from "react";
import classes from "./Footer.module.css";
import { Menu, Divider } from "semantic-ui-react";
import WithClass from "../../hoc/WithClass";

const footer = (props) => {
    return (
        <WithClass classes={classes.Margin}>
            <Divider />
            <div className={classes.FooterWrapper}>
                <Menu text>
                    <Menu.Item header>Copyright © 2020 LogiCafe</Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item>About Us</Menu.Item>
                        <Menu.Item>Contact</Menu.Item>
                        <Menu.Item>Help</Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        </WithClass>
    );
};

export default footer;
