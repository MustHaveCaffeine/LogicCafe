/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProblemViewPageQueryVariables = {|
  slug?: ?string
|};
export type ProblemViewPageQueryResponse = {|
  +problem: ?{|
    +title: string,
    +level: string,
    +description: ?string,
    +tags: ?$ReadOnlyArray<string>,
  |}
|};
export type ProblemViewPageQuery = {|
  variables: ProblemViewPageQueryVariables,
  response: ProblemViewPageQueryResponse,
|};
*/


/*
query ProblemViewPageQuery(
  $slug: String
) {
  problem(slug: $slug) {
    title
    level
    description
    tags
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "slug",
    "type": "String"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "slug",
        "variableName": "slug"
      }
    ],
    "concreteType": "Problem",
    "kind": "LinkedField",
    "name": "problem",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "level",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "tags",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProblemViewPageQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProblemViewPageQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ProblemViewPageQuery",
    "operationKind": "query",
    "text": "query ProblemViewPageQuery(\n  $slug: String\n) {\n  problem(slug: $slug) {\n    title\n    level\n    description\n    tags\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd5368aed9548c9afc293fc552fc78514';

module.exports = node;
