// para poder crear los links a mis paginas
import { NavLink } from "react-router-dom";





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
                {/* NavLink -----> es un Link pero permite hacer un estilo de active en el boton como que se selecciono */}

                <NavLink
                    // clases
                    className="btn btn-outline-dark"
                    // redireccione href es reemplazado por mi to
                    to="/">
                    {/* uso mi componente */}
                    Inicio
                </NavLink>
                <NavLink
                    // clases
                    className="btn btn-outline-dark"
                    // redireccione a
                    to="/blog">
                    {/* uso mi componente */}
                    Blog
                </NavLink>
                <NavLink
                    // clases
                    className="btn btn-outline-dark"
                    // redireccione a
                    to="/contacto">
                    {/* uso mi componente */}
                    Contacto
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;