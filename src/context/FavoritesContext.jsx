import { useState, createContext, useContext } from 'react'

// Kept private so components use the custom hook below instead of importing the raw context.
const FavoritesContext = createContext();


export const FavoritesContextProvider = ({children}) =>{ 
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (id) => {
        setFavorites(prevFavorites => {
            if (prevFavorites.includes(id)) {
                return prevFavorites.filter(favId => favId !== id);
            } else {
                return [...prevFavorites, id];
            }
        })
    }

    return (
        <FavoritesContext.Provider value={{favorites, toggleFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
};


// Single access point for favorites keeps component imports simple.
export const useFavorites = () => {
    return useContext(FavoritesContext);
}
