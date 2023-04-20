import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Formulario from "./Formulario";

const AppClima = () => {
    return (
        <>
            <ToastContainer theme="dark" />
            <main className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <Formulario />
                <div>Resultado</div>
            </main>
        </>
    );
};

export default AppClima;
