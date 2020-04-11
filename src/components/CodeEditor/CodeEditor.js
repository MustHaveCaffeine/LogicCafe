import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';

const snippet = 
`class Solution {
    public List<String> letterCombinations(String digits) {
            
    }
}`;

class CodeEditor extends Component {

    state = {
        code : snippet
    }

    editorDidMount(editor, monaco) {
        editor.focus();
    }

    onChange(newValue, e) {
        console.log('onChange', newValue, e);
    }

    render() {

        const options = {
            selectOnLineNumbers: true,
        };
    
        return (
          <MonacoEditor
            width="800"
            height="500"
            language="javascript"
            theme="vs-dark"
            value={this.state.code}
            options={options}
            onChange={this.onChange}
            editorDidMount={this.editorDidMount}
          />
        );
    }
}

export default CodeEditor;