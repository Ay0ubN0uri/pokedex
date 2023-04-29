import { Box, Text } from "native-base";

const List = ({ height, weight, candy, candy_count }) => {
    return (
        <Box p={1} bg='#e2b497' marginTop='2' rounded={7}>
            <Text color='muted.900' textAlign='center'>height : {height}</Text>
            <Text color='muted.900' textAlign='center'>weight : {weight}</Text>
            <Text color='muted.900' textAlign='center'>candy : {candy}</Text>
            <Text color='muted.900' textAlign='center'>candy count : {candy_count}</Text>
        </Box>
    )
}

export default List;