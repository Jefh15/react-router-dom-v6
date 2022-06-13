import { useEffect, useState } from 'react'



// recibo la url para que sea dinamico
export const useFetch = (url) => {


    // hace la solicitud a nuestra api jsonplaceholder
    const [data, setData] = useState([])
    // necesitamos detectamos el erorr
    const [error, setError] = useState('')
    // necesitamos hacer el loading de carga
    const [loading, setLoading] = useState(false)

    // use effect para que cuando cargue
    useEffect(() => {

        // se activa mi loading
        setLoading(true)

        // hago un fetch para solicitudes unicamente en get
        fetch(url)
            // nos trae una respuesta que la retorno en JSON
            .then(res => res.json())
            // obtenemos una data para pintarla
            .then(data => setData(data))
            // manejamos el error en el catch
            .catch(e => setError('Error de servidor'))
            //  y al final haga esto, sea verdero o falle no tire esto
            .finally(() => setLoading(false))

        // [url]--> si solo quiero ejecutarlo una vez
        // esta pendiente de la url
    }, [url])




    return { data, error, loading }
}
