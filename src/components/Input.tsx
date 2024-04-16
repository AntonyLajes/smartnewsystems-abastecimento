import { IInputProps, Input as NativeBaseInput, Text, VStack, FormControl } from 'native-base'

type Props = IInputProps & {
    title: string,
    errorMessage ?: string | null
}

export function Input({errorMessage = null, isInvalid, title, ...rest}: Props){

    const invalid = !!errorMessage || isInvalid

    return (
        <VStack
            space={1}
        >
            <Text
                color={invalid ? "error.600" :"gray.100"}
                fontSize={"sm"}
            >
                {title}
            </Text>
            <FormControl
                isInvalid={invalid}
            >
                <NativeBaseInput
                    bg={"gray.800"}
                    p={2}
                    borderWidth={1}
                    borderRadius={8}
                    borderColor={"gray.500"}
                    fontSize={"sm"}
                    color={"gray.100"}
                    placeholder={title}
                    placeholderTextColor={"gray.500"}
                    _focus={{
                        borderColor: "green.600",
                        bg: "gray.800"
                    }}
                    _invalid={{
                        borderColor: "error.600"
                    }}
                    {...rest}
                />
                <FormControl.ErrorMessage>
                    {errorMessage}
                </FormControl.ErrorMessage>
            </FormControl>
        </VStack>
    )

}