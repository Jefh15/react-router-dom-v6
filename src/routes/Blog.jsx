import React from 'react'
import { useFetch } from '../hooks/useFetch'

const Blog = () => {

    // uso mi hook, con lo que tiene el return solo lo copio jeje
    // useFetch() ----> recibe como parametro mi url
    // url ---> https://jsonplaceholder.typicode.com/posts
    const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/posts')


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


    return (

        <div>
            <h1>Blog</h1>
            {/* despues que cargue, si no hay error, la podemos iterar */}
            {
                data.map((item, index) => (
                    // retorno en un h4
                    <h4
                        // le pongo su key
                        key={item.id}
                    >{item.id} - {item.title}</h4>
                ))
            }

        </div>
    )
}

export default Blog