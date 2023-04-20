import {
    RiCelsiusLine,
    RiTempColdLine,
    RiTempHotLine,
    RiCloudyLine,
    RiCloudWindyLine,
} from "react-icons/ri";

const FooterResultado = ({ temp, cloud }) => {
    const kelvin = 273.15;

    return (
        <div className="flex justify-between items-center gap-2 w-full mt-8 px-5">
            <div className="flex items-center text-xl md:text-lg">
                <RiTempColdLine title="Temperatura mínima" />
                <p className="mr-1 ml-2">{parseInt(temp?.temp_min - kelvin)}</p>
                <RiCelsiusLine />
            </div>
            <div className="flex items-center text-xl md:text-lg">
                <RiTempHotLine title="Temperatura máxima" />
                <p className="mr-1 ml-2">{parseInt(temp?.temp_max - kelvin)}</p>
                <RiCelsiusLine />
            </div>
            <div className="flex items-center gap-2 text-xl md:text-lg">
                <RiCloudyLine title="Nubes" />
                <p>{cloud}%</p>
            </div>
            <div className="flex items-center gap-2 text-xl md:text-lg">
                <RiCloudWindyLine title="Humedad" />
                <p>{temp?.humidity}%</p>
            </div>
        </div>
    );
};

export default FooterResultado;
