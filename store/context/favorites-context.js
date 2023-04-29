import { createContext, useState } from "react";


export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { },
});


const FavoritesContextProvider = ({ children }) => {
    const [favoritePokemonIds, setFavoritePokemonIds] = useState([]);

    const addFavorite = (id) => {
        setFavoritePokemonIds(currentFavIds => {
            return [...currentFavIds, id];
        });
    }

    const removeFavorite = (id) => {
        setFavoritePokemonIds(currentFavIds => currentFavIds.filter(pokemonId => pokemonId !== id));
    }

    const value = {
        ids: favoritePokemonIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContextProvider;