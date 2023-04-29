import { Box, Heading, AspectRatio, Image, Text, HStack, Stack, Pressable, Skeleton } from "native-base";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const PokemonItem = ({ id, categoryIds, title, imageUrl, weight, height }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const navigation = useNavigation();

    const f = {
        uri: imageUrl
    }

    const onMealPressHandler = () => {
        navigation.navigate('Pokemon Details', {
            pokemonId: id
        });
    }

    return (
        <Pressable m='2' onPress={onMealPressHandler}>
            {
                ({
                    isHovered,
                    isFocused,
                    isPressed
                }) => (
                    <Box shadow={3} alignItems="center" style={{
                        transform: [{
                            scale: isPressed ? 0.95 : 1
                        }]
                    }}>
                        <Box rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1"
                            _dark={{
                                borderColor: "warmGray.600",
                                backgroundColor: "warmGray.900"
                            }}
                            _light={{
                                backgroundColor: "gray.50"
                            }}
                        >
                            <Box>

                                <AspectRatio w="100%" ratio={16 / 9}>
                                    <Image onLoad={e => {
                                        setIsLoaded(true);
                                    }} source={f} alt="image" />
                                </AspectRatio>
                            </Box>
                            <Stack p="4" space={3}>
                                <Skeleton.Text h="20" rounded='md' isLoaded={isLoaded}>
                                    <Stack space={2}>
                                        <Heading size="md" ml="-1">
                                            {title}
                                        </Heading>
                                        <HStack alignItems='flex-start' space={2}>
                                            {categoryIds.map(cat => <Text fontSize="md"
                                                key={cat.title}
                                                bg={cat.color}
                                                rounded='8'
                                                px='2'
                                                py="1"
                                                fontWeight="800" ml="-0.5" mt="-1">
                                                {cat.title}
                                            </Text>)}
                                        </HStack>
                                    </Stack>
                                </Skeleton.Text>
                                <HStack alignItems="center" space={4} justifyContent="space-between">
                                    <Skeleton h="5" w="30%" rounded='md' isLoaded={isLoaded}>
                                        <Text color="coolGray.600" _dark={{
                                            color: "warmGray.200"
                                        }} fontWeight="400">
                                            weight : {weight}
                                        </Text>
                                        <Text color="coolGray.600" _dark={{
                                            color: "warmGray.200"
                                        }} fontWeight="400">
                                            height : {height}
                                        </Text>
                                    </Skeleton>
                                </HStack>
                            </Stack>
                        </Box>
                    </Box>
                )
            }
        </Pressable>
    )
}

export default PokemonItem;