import Formulario from "./Formulario";

const AppClima = () => {
    return (
        <>
            <main className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <Formulario />
                <div>Resultado</div>
            </main>
        </>
    );
};

export default AppClima;
