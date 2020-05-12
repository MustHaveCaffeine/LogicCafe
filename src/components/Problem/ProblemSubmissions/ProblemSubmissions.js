import React from 'react';
import { Table } from 'semantic-ui-react';

const problemSubmissions = (props) => {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Time Submitted</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Runtime</Table.HeaderCell>
            <Table.HeaderCell>Memory</Table.HeaderCell>
            <Table.HeaderCell>Language</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>4 months ago</Table.Cell>
            <Table.Cell positive>Accepted</Table.Cell>
            <Table.Cell>0 ms</Table.Cell>
            <Table.Cell>36 MB</Table.Cell>
            <Table.Cell>java</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>4 months ago</Table.Cell>
            <Table.Cell negative>Compile Error</Table.Cell>
            <Table.Cell>0 ms</Table.Cell>
            <Table.Cell>36 MB</Table.Cell>
            <Table.Cell>java</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
}

export default problemSubmissions;