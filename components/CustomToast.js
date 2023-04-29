import { Box } from "native-base";

const CustomToast = ({ message }) => {
    return <Box bg="#e2b497" shadow={5} _text={{
        color: 'muted.800'
    }} px="2" py="1" rounded="sm" mb={5}>
        {message}
    </Box>;
}

export default CustomToast;