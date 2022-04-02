import {
    Center,
    HStack,
    VStack,
    Icon,
    Text,
} from "native-base";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const IconMapping = {
    "library": [Ionicons, "library-outline"],
    "football": [Ionicons, "american-football-outline"],
    "pest": [Ionicons, "bug-outline"],
    "barbell": [Ionicons, "barbell-outline"],
    "door": [MaterialCommunityIcons, "door"],
    "shower": [MaterialCommunityIcons, "shower"]
}

function DetailIcon(props) {
    const { name, text } = props;
    return (
        <VStack>
            <Center>
                <Icon
                    as={IconMapping[name][0]}
                    name={IconMapping[name][1]}
                    size="md"
                    color="black"/>
                <Text>{text}</Text>
            </Center>
        </VStack>
    );
}

function ProsConsIcon(props) {
    const { name, text } = props;
    return (
        <HStack>
            <Icon
                as={IconMapping[name][0]}
                name={IconMapping[name][1]}
                size="xs"
                color='grey'
                marginTop={1}/>
            <Text
                fontSize="sm"
                paddingLeft={2}
                color="grey">
                    {text}
            </Text>
        </HStack>
    );
}

export {
    DetailIcon,
    ProsConsIcon
}
