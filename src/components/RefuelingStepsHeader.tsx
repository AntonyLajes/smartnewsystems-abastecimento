import { VStack, Button, Heading, Text, IButtonProps } from "native-base";

import ArrowLeftSvg from "@assets/arrow-left.svg"

export function RefuelingStepsHeader({...rest}: IButtonProps){
    return (
        <VStack
            py={8}
            bg={"gray.600"}
            px={4}
        >
        
            <Button
                bg={"gray.525"}
                rounded={"full"}
                p={4}
                alignSelf={"flex-start"}
                _pressed={{
                    bg: "gray.500"
                }}
                {...rest}
            >
                <ArrowLeftSvg
                    width={16}
                    height={16}
                />
            </Button>

            <Heading
                color={"gray.100"}
                fontSize={"lg"}
                mt={6}
            >
                CD - 001 Mercedez Benz
            </Heading>
            <Text
                color={"gray.200"}
                fontSize={"lg"}
            >
                Preencha as informações abaixo
            </Text>

        </VStack>
    )
}