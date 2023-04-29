import { Center, Pressable, Text } from "native-base";

const CategoryGridTile = ({ title, color, onPerss }) => {
    return (
        <Pressable m='3' onPress={onPerss}>
            {
                ({
                    isHovered,
                    isFocused,
                    isPressed
                }) => (
                    <Center
                        rounded="8" shadow="3" space="3" alignItems="center" style={{
                            transform: [{
                                scale: isPressed ? 0.95 : 1
                            }]
                        }}
                        bg={color}
                        size="2xl" >
                        <Text fontWeight="600" fontFamily="body" fontSize="xl">{title}</Text>
                    </Center>
                )
            }
        </Pressable>
    )
}

export default CategoryGridTile;