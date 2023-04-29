import { Divider, Heading, VStack } from "native-base";
import List from "./List";

const PokemonInfo = ({ pokemon }) => {
    return (
        <VStack justifyContent='center' >
            <Heading size="lg" ml="-1" mb={2} textAlign='center'>
                Informations
            </Heading>
            <Divider alignSelf='center' width='20%' _light={{
                bg: "muted.800"
            }} _dark={{
                bg: "muted.50"
            }} />
            <List
                height={pokemon.height}
                weight={pokemon.weight}
                candy={pokemon.candy}
                candy_count={pokemon.candy_count}
            />
        </VStack>
    )
}

export default PokemonInfo;