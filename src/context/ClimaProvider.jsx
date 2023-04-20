import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ClimaContext = createContext();

export const ClimaProvider = ({ children }) => {
    //* State de la busqueda
    const [busqueda, setBusqueda] = useState({
        ciudad: "",
        pais: "",
    });

    const [respuesta, setRespuesta] = useState({});

    //* Llena el objecto del state
    const datosBusqueda = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value,
        });
    };

    //* Consulta a la api
    const consultarClima = async () => {
        try {
            const { ciudad, pais } = busqueda;
            const appId = import.meta.env.VITE_API_KEY;
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`;

            //? Verificación de ubicación
            const { data: ubicacion } = await axios(url);
            if (ubicacion.length === 0) {
                toast.error("Ubicación no encontrada 🤯");
                setBusqueda({
                    ciudad: "",
                    pais: "",
                });
                return;
            }

            const { lat, lon } = ubicacion[0];

            //? Promesa con petición del clima
            const { data: clima } = await toast.promise(
                axios(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
                ),
                {
                    pending: "Consultando...",
                    success: `Clima de ${ciudad} conseguida 👌`,
                    error: "Clima no encontrado 🤯",
                }
            );

            //? Colocando objecto del clima en el state
            setRespuesta(clima);

            //? Limpiando inputs
            setBusqueda({
                ciudad: "",
                pais: "",
            });
        } catch (error) {
            toast.error("Ooops! Ocurrio un error");
        }
    };

    return (
        <ClimaContext.Provider
            value={{
                datosBusqueda,
                busqueda,
                consultarClima,
                respuesta,
            }}
        >
            {children}
        </ClimaContext.Provider>
    );
};

export default ClimaContext;
