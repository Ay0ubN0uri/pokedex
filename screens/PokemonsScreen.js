import { Center, FlatList } from "native-base";
import { useContext } from "react";
import { PokemonContext } from "../store/context/pokemon-context";
import PokemonItem from "../components/PokemonItem";

const PokemonsScreen = ({ route, navigation }) => {
    const { categoryId } = route.params;
    const { pokemons, categories } = useContext(PokemonContext)

    let filtredPokemons = pokemons.filter(pok => pok.type.indexOf(categoryId) >= 0);

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

    return (
        <Center flex={1} px="3" >
            <FlatList data={filtredPokemons} keyExtractor={item => item.id} renderItem={renderPokemonItem} />
        </Center>
    )
}

export default PokemonsScreen;