import React from "react";
import WithClass from "../../hoc/WithClass/WithClass";
import classes from "./LandingPage.module.css";
import image from "./coffee-mug.png";
import image1 from "./slice1.png";
import profileImage from "./profile-pic.jpg";
import india from "./india.png";
import heart from "./heart.png";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

const landingPage = () => {
    const HeaderBranding = () => (
        <Grid container alignItems='center'>
            <Grid item xs={2}>
                <img
                    src={image}
                    className={classes.Logo}
                    alt='Logic Cafe Logo'
                />
            </Grid>
            <Grid item xs={9}>
                <h1 className={classes.LogoText}>Logic Cafe</h1>
            </Grid>
        </Grid>
    );

    const NavBarMenuItem = ({ title }) => (
        <a className={classes.NavBarMenuItem} href='/'>
            {title}
        </a>
    );

    const NavBarMenuItemBordered = ({ title }) => (
        <a className={classes.NavBarMenuItemBordered} href='/'>
            {title}
        </a>
    );

    const Header = () => (
        <Grid container direction='row' justify='space-between'>
            <Grid container item xs={3}>
                <HeaderBranding />
            </Grid>
            <Grid container item xs={4} justify='flex-end'>
                <NavBarMenuItem title='Problems' />
                <NavBarMenuItem title='Blog' />
                <NavBarMenuItemBordered title='Login' />
            </Grid>
        </Grid>
    );

    const ProfileBox = () => (
        <WithClass classes={classes.ProfileBox}>
            <Grid container justify='center'>
                <Grid item xs={5}>
                    <ProfilePic image={profileImage} size='200' />
                </Grid>
                <Grid container item xs={7} alignItems='flex-end'>
                    <Grid item>
                        <p className={classes.ProfileText}>Alyson La</p>
                        <p className={classes.ProfileType}>
                            Data Scientist, Google
                        </p>
                    </Grid>
                </Grid>
            </Grid>
        </WithClass>
    );

    const ProfilePic = () => <div className={classes.ProfilePicDiv}></div>;
    // const ProfilePic = ({ image, size }) => styled.div`
    //     height: 200px;
    //     width: 200px;
    //     border-radius: 100%;
    //     background-size: cover;
    //     background-position: center;
    //     background-image: url(${image});
    // `;

    const MessageBox = () => (
        <div className={classes.MessageBox}>
            <p className={classes.Message}>
                We at Google, always look for people who are passionate about
                alogorithm and data structure designing. These skill are primary
                for building perfect products.
            </p>
        </div>
    );

    const Footer = () => (
        <div>
            <div className={classes.FooterBorder}></div>
            <Grid container justify='space-between'>
                <Grid item>
                    <p className={classes.Copyright}>
                        COPYRIGHT © 2020 LOGIC CAFE
                    </p>
                </Grid>
                <Grid item>
                    <a className={classes.FooterLink} href='/'>
                        About Us
                    </a>
                    <a className={classes.FooterLink} href='/'>
                        Contact
                    </a>
                    <a className={classes.FooterLink} href='/'>
                        Help
                    </a>
                </Grid>
            </Grid>
            <Grid container justify='center'>
                <p className={classes.MadeWith}>Made with</p>
                <img src={heart} className={classes.FooterInlineImage} alt='' />
                <p className={classes.InIndia}>in India</p>
                <img src={india} className={classes.FooterInlineImage} alt='' />
            </Grid>
        </div>
    );

    return (
        <WithClass classes={classes.LandingPage}>
            <Header />
            <Grid container justify='space-between'>
                <Grid item xs={12} md={4}>
                    <h1 className={classes.MainHeading}>
                        We &lt;3 people who &lt;code/&gt;
                    </h1>
                    <NavBarMenuItemBordered title='Get Going &#8594;' />
                </Grid>
                <Grid item md={6} only={["md", "lg", "xl"]}>
                    <div className={classes.MainPicDiv}></div>
                </Grid>
            </Grid>
            <Grid container alignItems='flex-end' spacing={5}>
                <Grid item xs={12} md={6}>
                    <MessageBox />
                </Grid>
                <Grid item xs={12} md={6}>
                    <ProfileBox />
                </Grid>
            </Grid>

            <Footer />
        </WithClass>
    );
};

export default landingPage;
