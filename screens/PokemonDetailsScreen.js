import { AspectRatio, Box, Center, HStack, Heading, IconButton, Image, ScrollView, Stack, Text, VStack, useToast} from "native-base";
import { useContext, useLayoutEffect, useState } from "react";
import { PokemonContext } from "../store/context/pokemon-context";
import PokemonInfo from "../components/PokemonInfo";
import { AntDesign } from '@expo/vector-icons';
import { FavoritesContext } from "../store/context/favorites-context";
import CustomToast from "../components/CustomToast";

const PokemonDetailsScreen = ({ route, navigation }) => {
    const { pokemonId } = route.params;
    const toast = useToast();
    const [isLoaded, setIsLoaded] = useState(false);
    const { pokemons } = useContext(PokemonContext);
    const favoritePokemonsCtx = useContext(FavoritesContext);
    const pokemon = pokemons.find(pok => pok.id === pokemonId);
    const pokemonIsFavorite = favoritePokemonsCtx.ids.includes(pokemon.id);

    const f = {
        uri: pokemon.img
    }

    const favoritePokemonHandler = () => {
        if (pokemonIsFavorite) {
            favoritePokemonsCtx.removeFavorite(pokemon.id);
            toast.show({
                render: () => {
                    return <CustomToast message="Pokemon Removed!" />;
                }
            });
        }
        else {
            favoritePokemonsCtx.addFavorite(pokemon.id);
            toast.show({
                render: () => {
                    return <CustomToast message="Pokemon Added!" />;
                }
            });
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: ({ tintColor }) => <IconButton icon={<AntDesign name={pokemonIsFavorite ? 'star' : 'staro'} size={24} color={tintColor} />}
                borderRadius="full"
                _hover={{
                    bg: "#e2b497"
                }} _pressed={{
                    bg: "#e2b497",
                }}
                onPress={favoritePokemonHandler}
            />
        })
    }, [navigation, favoritePokemonHandler]);

    return (
        <Center flex={1} >
            <ScrollView showsVerticalScrollIndicator={false}>
                <Box>
                    <AspectRatio w="100%" ratio={16 / 10}>
                        <Image opacity={0.8} onLoad={e => {
                            setTimeout(() => {
                                setIsLoaded(true);
                            }, 3000);
                        }} source={f} alt="image" />
                    </AspectRatio>
                </Box>
                <Stack p="4" space={3}>
                    <HStack alignItems="center" space={3} justifyContent='space-between'>
                        <Heading size="lg" ml="-1">
                            {pokemon.name}
                        </Heading>
                    </HStack>
                    <PokemonInfo pokemon={pokemon} />
                </Stack>
            </ScrollView>
        </Center>
    )
}

export default PokemonDetailsScreen;