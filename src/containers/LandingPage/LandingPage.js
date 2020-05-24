import React from "react";
import WithClass from "../../hoc/WithClass/WithClass";
import classes from "./LandingPage.module.css";
import image from "./coffee-mug.png";
import image1 from "./slice1.png";
import profilePic from "./profile-pic.jpg";
import india from "./india.png";
import heart from "./heart.png";

const landingPage = (props) => {
    return (
        <WithClass classes={classes.LandingPage}>
            <img src={image} className={classes.Logo} alt='' />
            <WithClass classes={classes.LogoBox}>
                <p className={classes.LogoText}>Logic Cafe</p>
            </WithClass>
            <WithClass classes={classes.ProblemBox}>
                <p className={classes.Problem}>Problems</p>
            </WithClass>
            <WithClass classes={classes.BlogBox}>
                <p className={classes.Blog}>Blog</p>
            </WithClass>
            <WithClass classes={classes.LoginBox}>
                <p className={classes.Login}>Login</p>
            </WithClass>
            <WithClass classes={classes.MainBox}>
                <p className={classes.MainHeading}>
                    We &lt;3 people who &lt;code/&gt;
                </p>
            </WithClass>
            <WithClass classes={classes.GetGoingText}>
                <p className={classes.GetGoing}>Get Going</p>
            </WithClass>
            <img src={image1} className={classes.MainImage} alt='' />
            <WithClass classes={classes.ProfileBox}>
                <img src={profilePic} className={classes.ProfilePic} alt='' />
                <p className={classes.ProfileText}>Alyson La</p>
                <p className={classes.ProfileType}>Data Scientist, Google</p>
            </WithClass>
            <WithClass classes={classes.MessageBox}>
                <p className={classes.MessageFirstQuote}>"</p>
                <p className={classes.Message}>
                    We at Google, always look for people who are passionate
                    about alogorithm and data structure designing. These skill
                    are primary for building perfect products.
                </p>
                <p className={classes.MessageLastQuote}>"</p>
            </WithClass>
            <WithClass classes={classes.Line}></WithClass>
            <p className={classes.Copyright}>COPYRIGHT © 2020 LOGIC CAFE</p>
            <WithClass classes={classes.FooterBox}>
                <p className={classes.Aboutus}>About Us</p>
                <p className={classes.Contact}>Contact</p>
                <p className={classes.Help}>Help</p>
            </WithClass>
            <WithClass classes={classes.MadeBox}>
                <p className={classes.MadeWith}>Made with</p>
                <img src={heart} className={classes.Love} alt='' />
                <p className={classes.InIndia}>in India</p>
                <img src={india} className={classes.IndiaFlag} alt='' />
            </WithClass>
        </WithClass>
    );
};

export default landingPage;
