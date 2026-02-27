import { createContext, useState } from 'react'

export const FavoritesContext = createContext();
 

export const FavoritesContextProvider = ({children}) =>{ 
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (id) => {
        setFavorites(prevFavorites => {
            if (prevFavorites.includes(id)) {
                // If it's already a favorite, remove it
                return prevFavorites.filter(favId => favId !== id);
            } else {
                // If it's not a favorite, add it
                return ([...prevFavorites, id]);
            }
        })
    }

    console.log(favorites);

    return (
        <FavoritesContext.Provider value={{favorites, toggleFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
};

