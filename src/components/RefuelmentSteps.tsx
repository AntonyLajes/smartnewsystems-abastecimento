import { Box, Divider, HStack, Text } from "native-base";

type Props = {
    steps?: number,
    current: number
}

export function RefuelmentSteps({steps = 4, current}: Props){

    const stepsArray = Array.from({length: steps}, (_, index) => index + 1)

    return (
        <HStack
            alignItems={"center"}
            justifyContent={"center"}
            px={8}
            py={8}
        >
            {
                stepsArray.map((index) => (
                    <Box
                        key={index}
                        flexDirection={"row"}
                        alignItems={"center"}
                    >
                        <Box
                            size={6}
                            bg={
                                index === current ? "transparent" :
                                index > current ? "gray.400" : "green.500"
                            }
                            borderWidth={1}
                            borderColor={
                                index > current ? "transparent" : "green.500"
                            }
                            justifyContent={"center"}
                            alignItems={"center"}
                            rounded={"full"}
                        >
                            <Text
                                fontFamily={"heading"}
                                color={
                                    index === current ? "green.500" : 
                                    index < current ? "gray.550" : "gray.100"
                                }
                            >
                                {index}
                            </Text>
                        </Box>
                        {
                        index !== steps && 
                            <Divider 
                                thickness={2} 
                                w={16} 
                                bg={current > index ? "green.500" : "gray.400"}
                            />
                        }
                    </Box>
                ))
            }
        </HStack>
    )
}