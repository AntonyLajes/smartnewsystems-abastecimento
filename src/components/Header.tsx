import { HStack } from "native-base";

import LogoTextSvg from "@assets/logo-text.svg"

export function Header(){

    return (
        <HStack
            py={6}
        >
            <LogoTextSvg/>
        </HStack>
    )

}