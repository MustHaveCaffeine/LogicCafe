import React from 'react';
import classes from './Footer.module.css';
import { Menu , Divider } from 'semantic-ui-react';

const footer = (props) => {
    return (
        <div className={classes.Margin}>
            <Divider />
            <Menu text>
            <Menu.Item header>Copyright © 2020 LogiCafe</Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item>About Us</Menu.Item>
                <Menu.Item>Contact</Menu.Item>
                <Menu.Item>Help</Menu.Item>
            </Menu.Menu>
            </Menu>
        </div>
    );
};

export default footer;