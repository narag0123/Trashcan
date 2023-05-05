"use client";
import React, { useState, createContext } from "react";

//store 만든거
export const UseContext = createContext({});

//저장해서 쓸거
const UseProvider = ({ children }) => {
    const [openFolder, setOpenFolder] = useState("");

    return (
        <UseContext.Provider
            value={{ openFolder, setOpenFolder }}
        >
            {children}
        </UseContext.Provider>
    );
};
export default UseProvider;
