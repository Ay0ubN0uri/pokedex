import { Center, FlatList } from "native-base";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import EmptyList from "../components/EmptyList";
import { PokemonContext } from "../store/context/pokemon-context";
import PokemonItem from "../components/PokemonItem";

const FavoritesScreen = () => {
    const favoritePokemonsIds = useContext(FavoritesContext);
    const { pokemons, categories } = useContext(PokemonContext);

    let filtredPokemons = pokemons.filter(pok => favoritePokemonsIds.ids.indexOf(pok.id) >= 0);

    const renderPokemonItem = (itemData) => {
        const item = itemData.item;
        const pokemonsProps = {
            id: item.id,
            categoryIds: categories.filter(cat => item.type.includes(cat.title)),
            title: item.name,
            imageUrl: item.img,
            weight: item.weight,
            height: item.height,
        };
        return <PokemonItem {...pokemonsProps} />
    }

    if (filtredPokemons.length == 0) {
        return (
            <EmptyList message='You have no favorite pokemons yet.' />
        )
    }

    return (
        <Center flex={1} px="3">
            <FlatList data={filtredPokemons} keyExtractor={item => item.id} renderItem={renderPokemonItem} />
        </Center>
    )
}
export default FavoritesScreen;