import React from "react";
import { Grid, Image } from "semantic-ui-react";
import classes from "./HomePage.module.css";
import logo from "../../assets/images/logo_with_text.png";
import { withRouter } from "react-router-dom";
import Button from '../UI/Button/Button';

const homepage = ({ history }) => {
    const dummyText = `“Reduced object rendering time by 75% by applying Floyd’s algorithm, leading to a 10% reduction in system boot time.”`;

    const author = "- Gayle Laakmann McDowell";

    const routeToProblemList = () => {
        history.push("/problems");
    };

    return (
        <div>
            <div className={classes.Heading}>
                We &lt;3 people who want to code
            </div>
            <div className={classes.Spacing}>
                <Grid columns={2} padded>
                    <Grid.Column>
                        <h2>
                            Get Started with Algorithms today!
                        </h2>
                        <h3>{dummyText}</h3>
                        <h4>{author}</h4>
                        {/* <div className={classes.Spacing}> */}
                            {/* <Button
                                size='large'
                                onClick={routeToProblemList}
                                style={{
                                    background: "#F08700",
                                    color: "white",
                                }}>
                                Start Practice
                            </Button> */}
                            <Button
                                onClick={routeToProblemList}
                                size="large"
                                >
                                Start Practice
                            </Button>
                        {/* </div> */}
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={logo} centered />
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    );
};

export default withRouter(homepage);
