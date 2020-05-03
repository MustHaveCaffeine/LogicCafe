import React from "react";
import { Grid, Image, Header, Button } from "semantic-ui-react";
import classes from "./HomePage.module.css";
import image from "../../assets/images/back_image.png";

import { withRouter } from "react-router-dom";

const homepage = ({ history }) => {
    const dummyText = `“Reduced object rendering time by 75% by applying Floyd’s algorithm, leading to a 10% reduction in system boot time.”`;

    const author = "- Gayle Laakmann McDowell";

    const routeToProblemList = () => {
        history.push("/problems");
    };

    return (
        <div>
            <div className={classes.Heading}>LogiCafe</div>
            <div className={classes.Spacing}>
                <Grid columns={2} padded>
                    <Grid.Column>
                        {/* <Header as="h2">Heading</Header> */}
                        <Header as='h3'>{dummyText}</Header>
                        <Header as='h4'>{author}</Header>
                        <Header as='h2'>
                            Get Started with Algorithms today!
                        </Header>
                        <div className={classes.Spacing}>
                            <Button
                                onClick={routeToProblemList}
                                style={{ background: "#517fa4" }}>
                                Start Practice
                            </Button>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={image} centered size='large' />
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    );
};

export default withRouter(homepage);
