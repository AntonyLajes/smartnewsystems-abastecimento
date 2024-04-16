import { Heading, IButtonProps, Button as NativeBaseButton, Text } from "native-base";

type Props = IButtonProps & {
    title: string,
    variant?: "primary" | "secondary"
}

export function Button({title, variant = "primary", ...rest}: Props){
    return (
        <NativeBaseButton
            borderRadius={8}
            bg={variant === "primary"? "green.500" : "gray.600"}
            _pressed={{
                bg: variant === "primary"? "green.600" : "gray.400"
            }}
            {...rest}
        >
            <Text
                fontSize={"sm"}
                fontFamily={variant === "primary" ? "heading" : "body"}
                color={variant === "primary" ? "gray.700" : "gray.100"}
            >
                {title}
            </Text>
        </NativeBaseButton>
    )
}