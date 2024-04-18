import { useState } from "react";
import { Heading, VStack, Text, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { RefuelmentTypeCard } from "@components/RefuelmentTypeCard";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function NewRefueling(){

    const [refuelingType, setRefuelingType] = useState<"interno" | "externo" | null>(null)
    const navigation = useNavigation<AppNavigatorRoutesProps>()

    function handleNewRefueling(){
        navigation.navigate("qrCodeReader", {variant: "equipamento"})
    }

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
                title="Interno"
                mt={16}
                onPress={() => setRefuelingType("interno")}
                isPressed={refuelingType === "interno"}
            />
            <RefuelmentTypeCard
                title="Externo"
                mt={4}
                onPress={() => setRefuelingType("externo")}
                isPressed={refuelingType === "externo"}
            />
            <Button
                alignSelf={"flex-end"}
                bg={"gray.600"}
                rounded={8}
                mt={8}
                isDisabled={refuelingType === null}
                _pressed={{
                    bg: "gray.500"
                }}
                onPress={handleNewRefueling}
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