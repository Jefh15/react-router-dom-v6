// importo mi ruta anidada
import { Outlet } from 'react-router'
// importo mi componente
import Navbar from "./components/Navbar";

const App = () => {


    return (

        <>
            {/* importo mi componente */}
            <Navbar />
            {/* HAgo mi contenedor debajo */}
            <div className="container">
                {/* mis rutas se posicionan aqui dentro, porque esta es mi plantilla app.jsx */}
                <Outlet />
            </div>
        </>
    );
};

export default App;