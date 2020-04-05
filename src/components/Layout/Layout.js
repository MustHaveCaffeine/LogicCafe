import React from 'react';
import classes from './Layout.module.css';
import Footer from '../Footer/Footer'
import Toolbar from '../Toolbar/Toolbar'

const layout = (props) => {
    return(
        <React.Fragment>
            <Toolbar/>
            <main className={classes.Content}>
                {props.children}
            </main>
            <Footer/>
        </React.Fragment>
    );
};

export default layout;