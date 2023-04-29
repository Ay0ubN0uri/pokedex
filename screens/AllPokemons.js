import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../store/context/pokemon-context";
import { fetchCategories, fetchPokemons } from "../utils/http";
import { Center, FlatList } from "native-base";
import PokemonItem from "../components/PokemonItem";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorOverlay from "../components/ErrorOverlay";

const AllPokemons = () => {
    const { pokemons, setPokemons, categories, setCategories } = useContext(PokemonContext);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    const init = async () => {
        try {
            const res = await fetchCategories();
            setCategories(res);
            const res2 = await fetchPokemons();
            setPokemons(res2);
        }
        catch (err) {
            console.log(err);
            setError("Could not fetch pokemons!")
        }
        setIsLoading(false);
    }
    useEffect(() => {
        init();
    }, []);

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

    if (error && !isLoading) {
        return <ErrorOverlay message={error} onPress={() => {
            setError(null);
            setIsLoading(true);
            init();
        }} />
    }

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (pokemons.length == 0) {
        return (
            <EmptyList message='You have no pokemons.' />
        )
    }

    return (
        <Center flex={1} px="3" >
            <FlatList data={pokemons} keyExtractor={item => item.id} renderItem={renderPokemonItem} />
        </Center>
    )
}
export default AllPokemons;