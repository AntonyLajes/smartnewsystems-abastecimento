import { Text, VStack } from "native-base"

import LogoSvg from "@assets/logo.svg"
import { Input } from "@components/Input"
import { Button } from "@components/Button"

export function SignIn(){

    return (
        <VStack
            bg={"gray.700"}
            flex={1}
            px={10}
            justifyContent={"center"}
            space={8}
        >
            <VStack
                space={1}
            >
                <LogoSvg
                    height={38}
                    width={38}
                />
                <Text 
                    color={"white"}
                    fontSize={"lg"}
                >
                    Bem vindo(a)!
                </Text>
                <Text
                    color={"gray.300"}
                    fontSize={"md"}
                >
                    Entre com sua conta para se conectar ao app de abastecimento. 
                </Text>
            </VStack>
            <VStack
                space={2}
            >
                <Input
                    title="Usuário"
                />
                <Input
                    title="Senha"
                />
            </VStack>
            <Button
                title="Fazer login"
            />
        </VStack>
    )

}