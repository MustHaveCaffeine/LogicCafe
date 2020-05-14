import styled from "styled-components";

const Button = styled.button`
    font-size: ${(props) => (props.size === "small" ? "15px" : "20px")};
    margin: 5px;
    padding: 10px 20px;
    font-weight: 700;
    box-shadow: none;
    outline: none;
    opacity: ${(props) => (props.disabled ? 0.25 : 1)};
    border: 2px solid
        ${(props) => (props.btnType === "primary" ? "#F08700" : "#FFCF44")};
    color: ${(props) =>
        props.btnType === "primary" ? "white" : "rgba(0, 0, 0, .6)"};
    background-color: ${(props) =>
        props.btnType === "primary" ? "#F08700" : "#FFCF44"};

    &:hover {
        background-color: ${(props) =>
            props.btnType === "primary" ? "#CD6C00" : "#FFC53A"};
        border: 2px solid
            ${(props) => (props.btnType === "primary" ? "#CD6C00" : "#FFC53A")};
    }
`;

Button.defaultProps = {
    btnType: "primary",
    size: "small",
};

export default Button;
