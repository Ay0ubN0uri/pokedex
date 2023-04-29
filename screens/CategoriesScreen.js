import { Center, FlatList } from "native-base";
import CategoryGridTile from "../components/CategoryGridTile";
import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../store/context/pokemon-context";
import { fetchCategories, fetchPokemons } from "../utils/http";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorOverlay from "../components/ErrorOverlay";


const CategoriesScreen = ({ navigation }) => {
    const { categories, setCategories, pokemons, setPokemons } = useContext(PokemonContext);
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

    const renderCategoriesItem = (itemData) => {
        const onPressHandler = () => {
            navigation.navigate('Pokemons', {
                categoryId: itemData.item.title
            });
        }
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPerss={onPressHandler} />
        )
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

    if (categories.length == 0) {
        return (
            <EmptyList message='You have no categories.' />
        )
    }

    return (
        <Center flex={1} px="3" >
            <FlatList data={categories} renderItem={renderCategoriesItem} numColumns={2} />
        </Center>
    )
}

export default CategoriesScreen;