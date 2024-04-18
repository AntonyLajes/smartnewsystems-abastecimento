import { useState } from "react";

import { Box, ScrollView, VStack } from "native-base";

import { RefuelingStepsHeader } from "@components/RefuelingStepsHeader";
import { Select } from "@components/Select";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function RefuelingFirstStep(){

    const [driver, setDriver] = useState<string>("")

    return (
        <VStack
            flex={1}
            bg={"gray.700"}
        >
            <RefuelingStepsHeader/>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1
                }}
            >
                <VStack
                    flex={1}
                    mt={8}
                    px={8}
                    space={4}
                >
                    <Select
                        title="Motorista"
                        value={driver}
                        onValueChange={(value) => setDriver(value)}
                    />
                    <Input
                        title="Nota fiscal"
                        placeholder="Digite a nota fiscal"
                    />
                    <Input
                        title="N° de requerimento"
                        placeholder="Digite o n° de requerimento"
                    />
                </VStack>
                <VStack
                    space={1}
                    px={8}
                    my={8}
                >
                    <Button
                        title="Cancelar"
                        variant={"secondary"}
                    />
                    <Button
                        title="Próximo"
                        variant={"primary"}
                    />
                </VStack>
            </ScrollView>
        </VStack>
    )
}