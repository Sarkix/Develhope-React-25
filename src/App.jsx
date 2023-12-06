import React, { StrictMode } from "react";
import FocusableInput from "./FocusableInput";
import MountMessage from "./MountMessage";

function App() {
    return (
        <div>
            <h1>My React App</h1>
            {/* Agregamos el componente FocusableInput */}
            <FocusableInput />
            <StrictMode>
                <MountMessage />
            </StrictMode>
        </div>
    );
}

export default App;
