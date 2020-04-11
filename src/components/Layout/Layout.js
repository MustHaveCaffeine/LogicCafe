import React, { Fragment } from 'react';
import classes from './Layout.module.css';
import Footer from '../Footer/Footer'
import Toolbar from '../Toolbar/Toolbar'

const layout = (props) => {
    return (
        <Fragment>
            <Toolbar/>
            <main className={classes.Content}>
                {props.children}
            </main>
            <Footer/>
        </Fragment>
    );
}

export default layout;