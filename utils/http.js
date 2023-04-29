import axios from "axios"
import { getRandomColor } from "./colors";

export const fetchPokemons = async () => {
    const res = await axios({
        method: 'get',
        url: 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json',
    });
    return res.data.pokemon;
}

export const fetchCategories = async () => {
    const categories = [];
    const tmp = []
    const pokemons = await fetchPokemons();
    pokemons.forEach(pokemon => {
        pokemon.type.forEach(type => {
            if (!tmp.includes(type)) {
                tmp.push(type);
            }
        });
    });
    tmp.forEach(item => {
        categories.push({
            title: item,
            color: getRandomColor()
        });
    });
    return categories;
}