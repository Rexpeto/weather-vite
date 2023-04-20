import { toast } from "react-toastify";
import useClima from "../hooks/useClima";

const Formulario = () => {
    const { datosBusqueda, busqueda, consultarClima } = useClima();

    //* Al enviar el formulario
    const handdlerSubmit = (e) => {
        e.preventDefault();

        if (Object.values(busqueda).includes("")) {
            toast.warn("Todos los campos son obligatorios");
            return;
        }

        consultarClima();
    };

    return (
        <div className="max-w-full p-6 rounded-lg shadow bg-gray-800/90 border-gray-700 backdrop-blur-xl backdrop-brightness-75">
            <form onSubmit={handdlerSubmit}>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="text"
                        name="ciudad"
                        id="ciudad"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer transition duration-150"
                        placeholder=" "
                        onChange={(e) => datosBusqueda(e)}
                        value={busqueda.ciudad}
                    />
                    <label
                        htmlFor="ciudad"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Ciudad
                    </label>
                </div>
                <div className="mb-6">
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="pais"
                    >
                        País
                    </label>
                    <select
                        id="pais"
                        name="pais"
                        className="border text-sm rounded-lg  block w-full p-1.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-150"
                        onChange={(e) => datosBusqueda(e)}
                        value={busqueda.pais}
                    >
                        <option value="">--Seleccionar País--</option>
                        <option value="AR">Argentina</option>
                        <option value="DE">Alemania</option>
                        <option value="US">Estados Unidos</option>
                        <option value="EC">Ecuador</option>
                        <option value="CL">Chile</option>
                        <option value="CO">Colombia</option>
                        <option value="PE">Perú</option>
                        <option value="VE">Venezuela</option>
                    </select>
                </div>
                <button
                    type="Submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-150"
                >
                    Consultar
                </button>
            </form>
        </div>
    );
};

export default Formulario;
