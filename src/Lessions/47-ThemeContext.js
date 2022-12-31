import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <ThemeContext.Provider value={{ handleDarkMode, darkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContextProvider, ThemeContext };