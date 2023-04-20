import AppClima from "./components/AppClima";
import { ClimaProvider } from "./context/ClimaProvider";

const App = () => {
    return (
        <ClimaProvider>
            <div className="container mx-auto py-4">
                <h1 className="font-bold text-4xl text-center mb-8">
                    Open Weather + Vite
                </h1>
                <AppClima />
            </div>
        </ClimaProvider>
    );
};

export default App;
