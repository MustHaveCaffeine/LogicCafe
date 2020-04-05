import React from 'react';
import classes from './Layout.module.css';
import Footer from '../Footer/Footer'

const layout = (props) => {
    return(
        <React.Fragment>
            <div>Toolbar, Sidebar</div>
            <main className={classes.Content}>
                {props.children}
            </main>
            <Footer />
        </React.Fragment>
    );
};

export default layout;