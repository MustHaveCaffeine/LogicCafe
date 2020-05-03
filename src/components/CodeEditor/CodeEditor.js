import React, { Component, Fragment } from "react";
import { Dropdown } from "semantic-ui-react";
import AceEditor from "react-ace";

const languages = [
    { key: 1, text: "Java", value: "java" },
    { key: 2, text: "Python", value: "python" },
    { key: 3, text: "Javascript", value: "javascript" },
    { key: 4, text: "Golang", value: "golang" },
    { key: 5, text: "Ruby", value: "ruby" },
];

const themes = ["xcode"];

languages
    .map((language) => language.value)
    .forEach((lang) => {
        require(`ace-builds/src-noconflict/mode-${lang}`);
        require(`ace-builds/src-noconflict/snippets/${lang}`);
    });

themes.forEach((theme) => require(`ace-builds/src-noconflict/theme-${theme}`));

class CodeEditor extends Component {
    state = {
        selectedLanguage: "java",
    };

    changeLanguage = (_, data) => {
        this.code = data.value;
    };

    render() {
        const editorProps = {
            width: "100%",
            height: "350px",
            theme: "xcode",
            mode: this.props.language,
            onChange: this.props.onChange,
            editorProps: { $blockScrolling: true },
            setOptions: {
                useWorker: false,
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 4,
            },
        };

        return (
            <Fragment>
                <Dropdown
                    search
                    selection
                    options={languages}
                    onChange={this.changeLanguage}
                    value={this.state.selectedLanguage}
                />
                <AceEditor {...editorProps} />
            </Fragment>
        );
    }
}

export default CodeEditor;
