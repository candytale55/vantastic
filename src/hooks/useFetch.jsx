import { useState, useEffect } from 'react'

// Small data-loading hook used by pages and forms that read from the Mirage API.
export default function useFetch(url) {

    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        let ignoreResult = false;
        setLoading(true);
        setError(null);
        
        async function fetchData() {
            try {
                const response = await fetch(url);
                const cleanedData = await response.json();

                if (!ignoreResult) setData(cleanedData);

            } catch (err) {
                if (!ignoreResult) setError(err.message);
                
            } finally {
                if (!ignoreResult) setLoading(false);
            }
        }

        fetchData();

        return () => {
            ignoreResult = true;
        };
    }, [url]);


    return {data, loading, error};
}
