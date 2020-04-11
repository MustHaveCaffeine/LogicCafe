import React from 'react';
import { Header, Form, Checkbox, Button } from 'semantic-ui-react';
import WithClass from '../../hoc/WithClass';
import classes from './ProblemPublish.module.css';

const problemPublish = (props) => {
    return (
      <WithClass classes={classes.Margin}>
        <Header as="h2">Create Problem</Header>
        <Form>
          <Form.Field>
            <label>Title</label>
            <input placeholder="Title" />
          </Form.Field>
          <Form.TextArea label="Description" placeholder="Description" />
          <Form.Field>
            <label>Tags</label>
            <input placeholder="Tags" />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button type="submit" disabled>
            Submit
          </Button>
          <Button color='grey'>Test Case Upload</Button>
        </Form>
      </WithClass>
    );
}

export default problemPublish;