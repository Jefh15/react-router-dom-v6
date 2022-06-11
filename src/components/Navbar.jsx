// para poder crear los links a mis paginas
import { Link } from "react-router-dom";
// importo mis componentes
import Blog from "./Blog";
import Contacto from "./Contacto";
import Inicio from "./Inicio";




const Navbar = () => {



    return (
        // creo mi navbar
        <nav
            // con sus clases
            // navbar-dark ---> fuente
            // bg-dark ---> color de fondo
            className="navbar navbar-dark bg-success">
            {/* creo mi contenedor de mi navbar */}
            <div
                // para poder hacer el margen
                className="container">
                {/* creo mis link para poder hacer mis rutas */}
                {/* Link -----> ES mi ancla */}
                <Link
                    // clases
                    className="btn btn-outline-dark"
                    // redireccione href es reemplazado por mi to
                    to="/">
                    {/* uso mi componente */}
                    <Inicio />
                </Link>
                <Link
                    // clases
                    className="btn btn-outline-dark"
                    // redireccione a
                    to="/blog">
                    {/* uso mi componente */}
                    <Blog />
                </Link>
                <Link
                    // clases
                    className="btn btn-outline-dark"
                    // redireccione a
                    to="/contacto">
                    {/* uso mi componente */}
                    <Contacto />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;