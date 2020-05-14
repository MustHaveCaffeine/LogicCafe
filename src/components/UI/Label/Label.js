import styled from "styled-components";

const Label = styled.label`
    cursor: pointer;
    color: rgba(0, 0, 0, 0.6);
    opacity: 0.75;
    transition: 0.1s opacity ease;
    box-sizing: inherit;
    background-color: #ffcf44;
    border-color: #ffcf44;
    font-size: 0.85714286rem;
    font-weight: 700;
    display: ${(props) => (props.type === "inline" ? "inline-block" : "block")};
    margin: 5px;
    padding: 5px;
    border-radius: 50px;

    &:hover {
        opacity: 1;
    }

    a {
        color: rgba(0, 0, 0, 0.6);
    }
`;

Label.defaultProps = {
    type: "block",
};

export default Label;
