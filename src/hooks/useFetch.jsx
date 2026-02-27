import { useState, useEffect } from 'react'

export default function useFetch(url) {

    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        
        async function fetchData() {
            try {
                
                // await for the server to respond
                const response = await fetch(url);

                // then for the data to be turned into JSON
                const cleanedData = await response.json();

                setData(cleanedData);

            } catch (err) {

                // If above fails
                setError(err.message);
                
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);


    return {data, loading, error};
}
