import React, { useContext } from "react";
import { ThemeContextProvider, ThemeContext } from './47-ThemeContext'

function ReactContextAndUseContext() {
    const themeContext = useContext(ThemeContext);

    return (
        <div style={{ padding: 32 }}>
            <button onClick={themeContext.handleDarkMode}>Toggle Dark Mode</button>
            <Content />
        </div>
    )
}

function Content() {
    return (
        <div>
            <Paragraph />
        </div>
    )
}

function Paragraph() {
    const themContext = useContext(ThemeContext);

    return (
        <div style={
            themContext.darkMode ? {
                backgroundColor: "black", color: "white"
            } : null
        }>
            This is paragraph
        </div>
    )
}

export default ReactContextAndUseContext;