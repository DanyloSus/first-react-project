import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

export default function App() {
    const [darkMode, darkModeFunc] = React.useState(false)

    function toggleDarkMode() {
        darkModeFunc(pastMode => !pastMode)
    }

    return (
        <div className="container">
            <Navbar 
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />
            <Body darkMode={darkMode} />
        </div>
    )
}