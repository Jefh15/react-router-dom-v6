import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'



const Post = () => {


    // para recolectar mis params de mi url
    // useParams() ---> yo leo la url con el parametro :id
    const params = useParams()
    // usando destructuring directamente
    // const { id } = useParams()

    // saco lo que venga de mi hook
    // uso mi hook, con lo que tiene el return solo lo copio jeje
    // useFetch() ----> recibe como parametro mi url
    // url ---> https://jsonplaceholder.typicode.com/posts
    const { data, error, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    // console.log(data);

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

        data.length !== data.id ? (
            < div className="card mt-5" >
                <div className="card-header text-success">
                    {data.id}
                </div>
                <div className="card-body bg-gradient">
                    <h5 className="card-title text-black">{data.title}</h5>
                    <p className="card-text text-success">{data.body}</p>
                </div>
            </div >
        ) : (
            <div className="alert alert-danger mt-3" role="alert">
                <h1>No existe este dato {data.id}</h1>
            </div>
        )

    )
}

export default Post