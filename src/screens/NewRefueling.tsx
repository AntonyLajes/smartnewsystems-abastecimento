import { Heading, VStack, Text, Button } from "native-base";

import { Header } from "@components/Header";
import { RefuelmentTypeCard } from "@components/RefuelmentTypeCard";
import { useState } from "react";

export function NewRefueling(){

    const [refuelingType, setRefuelingType] = useState<"interno" | "externo" | null>(null)

    return (
        <VStack
            flex={1}
            bg={"gray.700"}
            px={8}
        >
            <Header/>
            <Heading
                color={"gray.100"}
                fontSize={"xl"}
            >
                Vamos começar...
            </Heading>
            <Text
                color={"gray.300"} 
                fontSize={"md"}
                pt={2}
            >
                Primeiro, selecione o tipo de abastecimento
            </Text>
            <RefuelmentTypeCard
                mt={16}
                onPress={() => setRefuelingType("interno")}
                isPressed={refuelingType === "interno"}
            />
            <Button
                isDisabled={refuelingType === null}
                rounded={8}
                bg={"gray.600"}
                mt={8}
                alignSelf={"flex-end"}
                _pressed={{
                    bg: "gray.500"
                }}
            >
                <Text
                    color={"gray.100"}
                >
                    Próximo
                </Text>
            </Button>
        </VStack>
    )

}