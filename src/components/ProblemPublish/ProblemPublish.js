import React from 'react';
import { Header, Form, Checkbox, Button, Select } from 'semantic-ui-react';
import WithClass from '../../hoc/WithClass';
import classes from './ProblemPublish.module.css';

const difficulty = [
    { key: 1, text: 'Easy', value: 1 },
    { key: 2, text: 'Medium', value: 2 },
    { key: 3, text: 'Hard', value: 3 },
]

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
            <label>Difficulty</label>
            <Select placeholder="Select Difficulty" options={difficulty}/>
          </Form.Field>
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