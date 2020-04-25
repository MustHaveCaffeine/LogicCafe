import React, { Component } from 'react';
import { Grid, Tab, Button , Select} from 'semantic-ui-react';
import classes from './ProblemViewPage.module.css';
import ProblemDescription from '../ProblemDescription/ProblemDescription';
import ProblemSubmissions from '../ProblemSubmissions/ProblemSubmissions';
import CodeEditor from '../CodeEditor/CodeEditor';

class ProblemViewPage extends Component {

    panes = [
        {
          menuItem: "Description",
          render: () => (
            <Tab.Pane>
              <ProblemDescription {...this.props} />
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
      
    languages = [
          { key: 1, text: 'Java', value: 1 },
          { key: 2, text: 'Python', value: 2 },
          { key: 3, text: 'C++', value: 3 },
          { key: 4, text: 'C', value: 4 },
          { key: 5, text: 'Javascript', value: 5 },
          { key: 6, text: 'Ruby', value: 6 },
      ]

    render () {

        return (
          <Grid columns={2} padded>
            <Grid.Column>
              <div>
                <Tab panes={this.panes} />
              </div>
              <div className={classes.Margin}>
                <Button.Group>
                  <Button color="teal">Prev</Button>
                  <Button.Or />
                  <Button color="teal">Next</Button>
                </Button.Group>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className={classes.Headers}>
                <Select placeholder="Select Language" options={this.languages}/>
                <div>
                    <Button color="grey">Run Code</Button>
                    <Button color="teal">Submit</Button>
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