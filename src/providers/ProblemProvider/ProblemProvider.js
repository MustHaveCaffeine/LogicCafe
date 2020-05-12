import React, { createContext } from "react";

export const ProblemContext = createContext();

export const ProblemProvider = (props) => {
    return (
        <ProblemContext.Provider value={props.value}>
            {props.children}
        </ProblemContext.Provider>
    );
};
