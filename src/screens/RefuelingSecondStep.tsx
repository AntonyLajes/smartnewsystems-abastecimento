import { useState } from "react";

import { VStack } from "native-base";

import { Input } from "@components/Input";
import { Select } from "@components/Select";

export function RefuelingSecondStep(){

    const [tank, setTank] = useState<string>("")

    return (
        <VStack
            space={4}
        >
            <Select
                title="Tanque"
                onValueChange={(value) => setTank(value)}
                value={tank}
            />
            <Input
                title="Hodômetro atual"
                subtitle="11.958"
                placeholder="12.141"
            />
        </VStack>
    )

}