import { Text, VStack } from "native-base"

import { Header } from "@components/Header"

export function Home(){
    
    return (
        <VStack
            bg={"gray.700"}
            px={8}
            py={2}
            flex={1}
        >
            <Header/>
            <VStack
                my={8}
            >
                <Text
                    color={"gray.300"}
                    fontSize={"md"}
                >
                    Escaneie o QR Code do tanque no campo abaixo:
                </Text>
            </VStack>
        </VStack>
    )

}