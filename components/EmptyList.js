import { Center, Image, Text } from 'native-base';

const EmptyList = ({ message }) => {
    return (
        <Center alignItems="center" justifyContent="center" flex={1}>
            <Image m={0} borderRadius='full' source={require('../assets/images/empty.png')} size='2xl' alt="Empty list" />
            <Text>{message}</Text>
        </Center>
    )
}

export default EmptyList;