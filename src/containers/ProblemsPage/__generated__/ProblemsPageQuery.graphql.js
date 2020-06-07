/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProblemsPageQueryVariables = {||};
export type ProblemsPageQueryResponse = {|
  +problems: ?$ReadOnlyArray<{|
    +title: string,
    +level: string,
    +slug: string,
  |}>
|};
export type ProblemsPageQuery = {|
  variables: ProblemsPageQueryVariables,
  response: ProblemsPageQueryResponse,
|};
*/


/*
query ProblemsPageQuery {
  problems {
    title
    level
    slug
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Problem",
    "kind": "LinkedField",
    "name": "problems",
    "plural": true,
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
        "name": "slug",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ProblemsPageQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ProblemsPageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ProblemsPageQuery",
    "operationKind": "query",
    "text": "query ProblemsPageQuery {\n  problems {\n    title\n    level\n    slug\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '16309ebd6ee281aaf6a2071076724338';

module.exports = node;
