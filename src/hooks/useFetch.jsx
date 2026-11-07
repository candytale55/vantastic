// Hook reutilizable para cargar datos por fetch y exponer estados de carga, error y respuesta.
import { useState, useEffect } from 'react'

// Small data-loading hook used by pages and forms that read from the Mirage API.
export default function useFetch(url, delayMs = 0) {

    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        let ignoreResult = false;
        setLoading(true);
        setError(null);
        
        async function fetchData() {
            try {
                if (delayMs > 0) {
                    await new Promise(resolve => setTimeout(resolve, delayMs));
                }

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
    }, [url, delayMs]);


    return {data, loading, error};
}
