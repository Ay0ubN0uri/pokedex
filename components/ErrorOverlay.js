import { Button, Center, Image, Text } from 'native-base';
import { AntDesign } from '@expo/vector-icons';


const ErrorOverlay = ({ message, onPress }) => {
    return (
        <Center alignItems="center" justifyContent="center" flex={1}>
            <Image m={0} borderRadius='full' source={require('../assets/images/empty.png')} size='2xl' alt="Empty list" />
            <Text>{message}</Text>
            <Button
                endIcon={<AntDesign name="reload1" size={18} color="white" />}
                mt={2}
                bg={'#24180f'}
                _text={{
                    color: 'white'
                }}
                size={'lg'}
                _pressed={{
                    bg: '#e2b497'
                }}
                _hover={{
                    bg: '#e2b497'
                }}
                onPress={onPress}
            >
                Reload
            </Button>
        </Center>
    )
}

export default ErrorOverlay;