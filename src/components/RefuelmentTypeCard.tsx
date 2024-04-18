import { Box, HStack, Text, Button, IButtonProps } from "native-base";

import TruckSvg from "@assets/truck.svg"

type Props = IButtonProps & {
    title: string,
    isPressed: boolean
}

export function RefuelmentTypeCard({title, isPressed, ...rest}: Props){

    return (
        <Button
            bg={"gray.600"}
            rounded={8}
            borderWidth={1}
            borderColor={"gray.500"}
            justifyContent={"flex-start"}
            p={0}
            isPressed={isPressed}
            _pressed={{
                bg: "gray.500",
                borderWidth: 1,
                borderColor: "green.500"
            }}
            {...rest}
        >
            <HStack
                alignItems={"center"}
                space={4}
            >
                <Box
                    bg={isPressed ? "gray.550" : "gray.700"}
                    p={2}
                    m={3}
                    rounded={8}
                >
                    <TruckSvg/>
                </Box>
                <Text
                    color={isPressed ? "gray.100": "gray.300"}
                    fontSize={"lg"}
                    fontFamily={"heading"}
                >
                    {title}
                </Text>
            </HStack>
        </Button>
    )

}