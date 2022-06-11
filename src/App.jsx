// importo mi componente
import Navbar from "./components/Navbar";

const App = () => {
    return (

        <div>
            {/* importo mi componente */}
            <Navbar />
            {/* HAgo mi contenedor debajo */}
            <div className="container">
                <h1>App</h1>
            </div>
        </div>
    );
};

export default App;