import React from "react";
import WithClass from "../../hoc/WithClass/WithClass";
import { Label } from "semantic-ui-react";
import { Link } from "react-router-dom";

const filters = [
    "Array",
    "Binary Search",
    "Hash Table",
    "Linked List",
    "Math",
    "Two Pointers",
    "String",
    "Divide and Conquer",
    "Dynamic Programming",
    "Backtracking",
    "Stack",
    "Heap",
    "Greedy",
    "Sort",
    "Bit Manipulation",
    "Tree",
    "DFS",
    "BFS",
    "Union find",
    "Graph",
    "Design",
    "Topological Sort",
    "Trie",
    "Queue",
    "Recursion",
];

const tagBasedFilter = (props) => {

    let tagFilters = filters.map((filter) => (
        <Label as='a' color='teal' key={filter} >
            <Link to='/'>
                {filter}
            </Link>
        </Label>
    ));

    return (
        <WithClass>
            <Label.Group circular>{tagFilters}</Label.Group>
        </WithClass>
    );
};

export default tagBasedFilter;
