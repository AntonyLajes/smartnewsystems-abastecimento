import { useState } from "react";

import { HStack, VStack } from "native-base";

import { Input } from "@components/Input";
import { Select } from "@components/Select";

export function RefuelingThirdStep(){

    const [fuel, setFuel] = useState("")

    return (
        <VStack
            space={4}
        >

            <Select
                title="Combustível"
                onValueChange={(value) => setFuel(value)}
                value={fuel}
            />

            <HStack
                justifyContent={"space-between"}
                space={4}
            >
                <Input
                    title="Quantidade"
                    placeholder="100,00"
                />
                <Input
                    title="Cons. Realizado"
                    placeholder="14,28"
                />
            </HStack>

            <HStack
                justifyContent={"space-between"}
                space={4}
            >
                <Input
                    title="Valor UN"
                    placeholder="9,00"
                />
                <Input
                    title="Custo Total"
                    placeholder="R$ 900,00"
                />
            </HStack>

            <Input
                title="Contador atual"
                subtitle="11.958"
                placeholder="12.141"
            />

        </VStack>
    )

}