import { useState, createContext, useContext } from 'react'

// private
const FavoritesContext = createContext();


export const FavoritesContextProvider = ({children}) =>{ 
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (id) => {
        setFavorites(prevFavorites => {
            if (prevFavorites.includes(id)) {
                // If it's already a favorite, remove it
                return prevFavorites.filter(favId => favId !== id);
            } else {
                // If it's not a favorite, add it
                return [...prevFavorites, id];
            }
        })
    }

    console.log("Vans favoritas: ", favorites); // TODO: Remove after tests are done.

    return (
        <FavoritesContext.Provider value={{favorites, toggleFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
};


// Export a custom hook to use the context (To solve Vite issue with context object vs not a React component.)
export const useFavorites = () => {
    return useContext(FavoritesContext);
    // TODO: Check that eslint warning
}
