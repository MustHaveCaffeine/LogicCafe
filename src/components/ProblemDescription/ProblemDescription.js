import React from 'react';
import { Divider, Header } from 'semantic-ui-react';
import classes from './ProblemDescription.module.css';

const problemDescription = (props) => {
    return (
      <div>
        <Header as="h3">17. Letter Combinations of a Phone Number</Header>
        <div className={classes.Headers}>
          <div>
            <Header as="h5" color="orange">
              Medium
            </Header>
          </div>
          <div>
            <Header as="h6"> 3366</Header>
          </div>
          <div>
            <Header as="h6">379</Header>
          </div>
          <div>
            <Header as="h6">Add to List</Header>
          </div>
          <div>
            <Header as="h6">Share</Header>
          </div>
        </div>
        <Divider />
        Given a string containing digits from 2-9 inclusive, return all possible
        letter combinations that the number could represent.A mapping of digit
        to letters (just like on the telephone buttons) is given below. Note
        that 1 does not map to any letters.
      </div>
    );
}

export default problemDescription;