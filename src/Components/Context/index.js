import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

    // State du theme

    const [theme, setTheme] = useState(true);
    
    // Modification du state au clique sur le switch 
    
    const toggleTheme = () => {
        setTheme(!theme)
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;