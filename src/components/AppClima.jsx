import useClima from "../hooks/useClima";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Formulario from "./Formulario";
import Resultado from "./Resultado";

const AppClima = () => {
    const { respuesta } = useClima();
    return (
        <>
            <ToastContainer theme="dark" />
            <main className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <Formulario />
                {respuesta?.name ? <Resultado /> : null}
            </main>
        </>
    );
};

export default AppClima;
