import { createContext, useState } from "react";

const ClimaContext = createContext();

export const ClimaProvider = ({ children }) => {
    return (
        <ClimaContext.Provider
            value={{
                hola: "hola",
            }}
        >
            {children}
        </ClimaContext.Provider>
    );
};

export default ClimaContext;
