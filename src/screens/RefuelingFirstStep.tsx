import { useState } from "react";

import { VStack } from "native-base";

import { Select } from "@components/Select";
import { Input } from "@components/Input";

export function RefuelingFirstStep(){

    const [driver, setDriver] = useState<string>("")

    return (
        <VStack
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
    )
}