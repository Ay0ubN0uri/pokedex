import { createContext, useState } from "react";


export const PokemonContext = createContext({
    pokemons: [],
    setPokemons: () => { },
    categories: [],
    setCategories: () => { }
});



const PokemonContextProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([]);
    const [categories, setCategories] = useState([]);

    const value = {
        pokemons: pokemons,
        setPokemons: setPokemons,
        categories: categories,
        setCategories: setCategories
    }
    return (
        <PokemonContext.Provider value={value}>
            {children}
        </PokemonContext.Provider>
    )
}


export default PokemonContextProvider;