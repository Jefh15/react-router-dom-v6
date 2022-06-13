import { Link, useSearchParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Blog = () => {


    // leemos una query que le enviemos en el URL
    let [searchParams, setSearchParams] = useSearchParams()

    // useEffect(() => {
    //     // para ver que cada vez que cambie me muestre el cambio de mi searchParams
    //     // http://localhost:3000/blog?query=aaa
    //     console.log(searchParams.get('query')) // ----> aaa

    //     // [searchParams] ---> ejecutate una solo vez
    // }, [searchParams])


    // uso mi hook, con lo que tiene el return solo lo copio jeje
    // useFetch() ----> recibe como parametro mi url
    // url ---> https://jsonplaceholder.typicode.com/posts
    const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/posts')

    // console.log(data)

    // compruebo si loading esta en true
    if (loading) {
        // regreso esto cada vez que se haga la solicitud va a estar en loading
        return (<h2>Loading...</h2>)
    }


    // pero en caso de que exista un error
    // '' ---> porque '' porque asi lo inicialize en el hook
    if (error !== '') {
        // pinto el error
        return (<h2>{error}</h2>)
    }


    // funcion recibe un evento
    const handleChange = (e) => {

        // guardo lo que viene de mi filter
        let filter = e.target.value

        // en caso de que exista ese filter
        if (filter) {

            setSearchParams({
                // le paso mi objeto
                filter
            })

        } else {
            // caso contrarrio, le paso el objeto vacio
            setSearchParams({})
        }

    }


    return (

        <div>
            <h1>Blog</h1>

            {/* creo in input */}

            <label>Filtro</label>
            <div className="input-group mt-2 mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        Búsqueda
                    </span>
                </div>
                <input
                    // tipo
                    type="text"
                    // clases
                    className="form-control"
                    // tomo el valor de mi filter en mi params
                    // osea si pongo localhost:3000/blog?filter="jaja"
                    // me pinta (jaja) en el input
                    value={
                        searchParams.get('filter')
                        // si no existe coloca un string vacio
                        || ''
                    }
                    // onChange ---> usa una funcion handleChange --->  para que haga relacion en tiempo real
                    onChange={handleChange}
                />
            </div>


            {/* despues que cargue, si no hay error, la podemos iterar */}
            {

                // PRIMERO FILTRO Y LUEGO RECORRO CON EL MAP
                data.filter((item) => {

                    // filter recibe un verdadero o falso
                    // guardo lo que escribio el usuario en el input
                    let filter = searchParams.get('filter')

                    // en caso de que el filtro no exista
                    if (!filter) {
                        return true
                    }

                    // caso de que exista ese filter debo leer lo que viene del input
                    // por cada vuelta ----> item.title
                    // .toLowerCase ---> lo paso a minuscula
                    let title = item.title.toLowerCase()

                    // .startsWith() ---> 

                    // devuelvo, esto devuelve un verdadero o un false
                    return title.startsWith(filter.toLowerCase())
                })
                    // a todo esto le aplico un map para que recorra cada uno
                    .map((item, index) => (

                        // retorno en un h4
                        < h4
                            // le pongo su key
                            key={item.id}
                        >
                            {/* // para poder hacer clickeable mi item debo hacer un Link */}
                            < Link
                                // to ---> para que se vaya a alguna ruta
                                // `` ---> porque vamos a hacer una interpolacion
                                // `/blog/${item.id}` ----> pero para empujarlo debemos hacer esas rutas dinamicas en el index
                                to={`/blog/${item.id}`}
                            >
                                {/* DENTRO PINTO LA INFO */}
                                {item.id} - {item.title}
                            </Link>
                        </h4 >
                    ))
            }

        </div >
    )
}

export default Blog