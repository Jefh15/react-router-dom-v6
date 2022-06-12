import { Link } from 'react-router-dom'

const NotFound404 = () => {


    return (
        <>
            <div>
                <h1>404</h1>
            </div>
            <Link
                // empujalo al unicio
                // clases
                className="btn btn-outline-success"
                to='/'
            >Inicio</Link>
        </>
    )
}

export default NotFound404