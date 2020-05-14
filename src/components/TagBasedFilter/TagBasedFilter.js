import React from "react";
import WithClass from "../../hoc/WithClass/WithClass";
import { Link } from "react-router-dom";
import Label from "../UI/Label/Label";

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
        <Label key={filter}>
            <Link to='/'>{filter}</Link>
        </Label>
    ));

    return <WithClass>{tagFilters}</WithClass>;
};

export default tagBasedFilter;
