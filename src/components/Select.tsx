import { Select as NativeBaseSelect, VStack, Text, FormControl, IInputProps } from "native-base";
import { useState } from "react";

type Props = IInputProps & {
    title: string,
    isInvalid?: boolean,
    value: string,
    errorMessage?: string | null,
    onValueChange: (value: string) => void
}

export function Select({errorMessage = null, isInvalid = false, onValueChange, value, title, ...rest}: Props){

    const invalid = !!errorMessage || isInvalid
    const [isOpen, setIsOpen] = useState<boolean>(false)

    function handleOnValueChange(value: string){
        setIsOpen(false)
        onValueChange(value)
    }

    return(

        <VStack
            space={1}
        >
            <Text
                fontSize={"sm"}
                color={isInvalid ? "error.600" : "gray.100"}
            >
                {title}
            </Text>
            <FormControl
                isInvalid={invalid}
            >
                <NativeBaseSelect
                    placeholder="Selecione o motorista"
                    color={"gray.100"}
                    borderColor={isOpen ? "green.600" : "gray.500"}
                    bg={"gray.800"}
                    fontSize={"sm"}
                    borderRadius={8}
                    onOpen={() => setIsOpen(true)}
                    onClose={() => setIsOpen(false)}
                    selectedValue={value}
                    onValueChange={itemValue => handleOnValueChange(itemValue)}
                >
                    <NativeBaseSelect.Item
                        label="Motorista 1Motorista 1Motorista 1Motorista 1Motorista 1Motorista 1"
                        value="motorista_1"
                    />
                </NativeBaseSelect>
                <FormControl.ErrorMessage>
                    {errorMessage}
                </FormControl.ErrorMessage>
            </FormControl>
        </VStack>

    )

}