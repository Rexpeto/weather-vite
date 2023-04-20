import useClima from "../hooks/useClima";
import { RiCelsiusLine } from "react-icons/ri";
import FooterResultado from "./FooterResultado";

const Resultado = () => {
    const { respuesta } = useClima();
    const {
        clima: { main },
        clima: { clouds },
    } = respuesta;

    //* Grados Kelvin
    const kelvin = 273.15;

    return (
        <div className="flex flex-col items-center gap-5 md:gap-3 max-w-full p-6 rounded-lg shadow bg-gray-800/90 border-gray-700 backdrop-blur-xl backdrop-brightness-75">
            <h2 className="font-bold text-3xl md:text-2xl">
                {respuesta?.name}
            </h2>
            <p className="font-bold text-2xl md:text-xl">{respuesta?.state}</p>
            <div className="flex items-center gap-2">
                <h3 className="text-6xl md:text-4xl">
                    {parseInt(main?.temp - kelvin)}
                </h3>
                <RiCelsiusLine className="text-6xl md:text-4xl" />
            </div>
            <FooterResultado temp={main} cloud={clouds.all} />
        </div>
    );
};

export default Resultado;
