import { createContext, useState } from "react";

const ClimaContext = createContext();

export const ClimaProvider = ({ children }) => {
    //* State de la busqueda
    const [busqueda, setBusqueda] = useState({
        ciudad: "",
        pais: "",
    });

    //* Llena el objecto del state
    const datosBusqueda = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <ClimaContext.Provider
            value={{
                datosBusqueda,
                busqueda,
            }}
        >
            {children}
        </ClimaContext.Provider>
    );
};

export default ClimaContext;
