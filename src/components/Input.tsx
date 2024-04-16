import { IInputProps, Input as NativeBaseInput, Text, VStack } from 'native-base'

type Props = IInputProps & {
    title: string
}

export function Input({title, ...rest}: Props){

    return (
        <VStack
            space={1}
        >
            <Text
                color={"gray.100"}
                fontSize={"sm"}
            >
                {title}
            </Text>
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
                {...rest}
            />
        </VStack>
    )

}