import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(false)

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('darkMode')));
    useEffect(() => {
        localStorage.setItem('darkMode', !!isDark)
    }, [isDark])

    return <ThemeContext.Provider value={{ isDark, setIsDark }}>
        {children}
    </ThemeContext.Provider>
}