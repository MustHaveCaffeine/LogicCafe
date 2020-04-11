import React, { Component } from 'react';
import { Grid, Tab, Button , Select} from 'semantic-ui-react';
import classes from './ProblemViewPage.module.css';
import ProblemDescription from '../ProblemDescription/ProblemDescription';
import ProblemSubmissions from '../ProblemSubmissions/ProblemSubmissions';
import CodeEditor from '../CodeEditor/CodeEditor';

const panes = [
  {
    menuItem: "Description",
    render: () => (
      <Tab.Pane>
        <ProblemDescription />
      </Tab.Pane>
    ),  
  },
  { menuItem: "Solution", render: () => <Tab.Pane>None</Tab.Pane> },
  { menuItem: "Submissions", render: () => (
        <Tab.Pane>
            <ProblemSubmissions />
        </Tab.Pane>
   ) },
];

const languages = [
    { key: 1, text: 'Java', value: 1 },
    { key: 2, text: 'Python', value: 2 },
    { key: 3, text: 'C++', value: 3 },
    { key: 4, text: 'C', value: 4 },
    { key: 5, text: 'Javascript', value: 5 },
    { key: 6, text: 'Ruby', value: 6 },
]

class ProblemViewPage extends Component {

    render () {

        return (
          <Grid columns={2} padded>
            <Grid.Column>
              <div>
                <Tab panes={panes} />
              </div>
              <div className={classes.Margin}>
                <Button.Group>
                  <Button>Prev</Button>
                  <Button.Or />
                  <Button>Next</Button>
                </Button.Group>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className={classes.Headers}>
                <Select placeholder="Select Language" options={languages}/>
                <div>
                    <Button>Run Code</Button>
                    <Button color='grey'>Submit</Button>
                </div>
              </div>
              <div className={classes.Margin}>
                <CodeEditor />
              </div>
            </Grid.Column>
          </Grid>
        );
    }
}

export default ProblemViewPage; 