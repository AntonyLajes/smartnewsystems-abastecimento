import { IInputProps, Input as NativeBaseInput, Text, VStack, FormControl } from 'native-base'
import { forwardRef } from 'react'

type Props = IInputProps & {
    title?: string,
    subtitle?: string,
    errorMessage ?: string | null,
    forwardRef: React.RefObject<any>
}

const InputWithRef = forwardRef<typeof NativeBaseInput, Props>(({
    errorMessage = null,
    isInvalid,
    title,
    subtitle,
    forwardRef,
    ...rest
}, ref) => {

    return (
        <VStack
            space={1}
            flex={1}
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
                placeholderTextColor={"gray.300"}
                ref={forwardRef}
                _focus={{
                    borderColor: "green.600",
                    bg: "gray.800"
                }}
                _invalid={{
                    borderColor: "error.600"
                }}
                {...rest}
            />
        </VStack>
    )

})

export default InputWithRef