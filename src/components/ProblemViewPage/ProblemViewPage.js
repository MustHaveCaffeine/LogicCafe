import React from 'react';
import { Grid, Tab, Header } from 'semantic-ui-react';

const panes = [
    { menuItem: 'Description', render: () => <Tab.Pane>
        Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
        A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
    </Tab.Pane> },
    { menuItem: 'Solution', render: () => <Tab.Pane>None</Tab.Pane> },
    { menuItem: 'Submissions', render: () => <Tab.Pane>None</Tab.Pane> }
];

const problemViewPage = (props) => {
    return (
      <Grid columns={2} padded>
        <Grid.Column>
            <Header as='h3'>17. Letter Combinations of a Phone Number</Header>
            <Header as='h5' color='orange'>Medium</Header>
            <Tab panes={panes}/>
        </Grid.Column>
        <Grid.Column>
            
        </Grid.Column>
      </Grid>
    );
}

export default problemViewPage;