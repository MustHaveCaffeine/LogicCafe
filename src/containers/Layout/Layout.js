import React, { Fragment } from "react";
import classes from "./Layout.module.css";
import Footer from "../../components/Footer/Footer";
import Toolbar from "../../components/Toolbar/Toolbar";

const layout = (props) => {
    let content = (
        <Fragment>
            <Toolbar />
            <main className={classes.Content}>{props.children}</main>
            <Footer />
        </Fragment>
    );
    if (window.location.pathname === "/") {
        content = <Fragment>{props.children}</Fragment>;
    }

    return content;
};

export default layout;
