import { Text, VStack } from "native-base"
import LogoSvg from "@assets/logo.svg"

export function Splash(){

    return (
        <VStack
            bg={"gray.700"}
            flex={1}
            justifyContent={"center"}
            alignItems={"center"}
            space={9}
        >
            <LogoSvg
                height={130}
                width={150}
            />
            <Text
                fontSize={"xxl"}
                textTransform={"uppercase"}
                fontFamily={"black"}
                color={"green.600"}
            >
                ABASTECIMENTO
            </Text>
        </VStack>
    )

}