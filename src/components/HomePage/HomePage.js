import React from 'react';
import { Grid, Image, Header, Button } from 'semantic-ui-react';
import classes from './HomePage.module.css';
import image from '../../assets/images/homepage_image.jpg';

const homepage = () => {

    const dummyText = "There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration ";

    return (
        <div>
            <div className={classes.Heading}>LogiCafe</div>
            <div className={classes.Spacing}>
                <Grid columns={2} padded>
                    <Grid.Column>
                        <Header as='h2'>Heading</Header>
                        <Header as='h3'>{dummyText}</Header>
                        <div className={classes.Spacing}>
                            <Button primary>Start Practice</Button>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={image} fluid />
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    );
}
  


export default homepage;