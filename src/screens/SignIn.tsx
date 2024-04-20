import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { Text, VStack } from "native-base"

import LogoSvg from "@assets/logo.svg"

import { Input } from "@components/Input"
import { Button } from "@components/Button"

type SignInFields = {
    user: string,
    password: string
}

const signInFieldsSchema = yup.object({
    user: yup.string().required("Insira seu usuário."),
    password: yup.string().required("Insira sua senha.")
})

export function SignIn(){

    const [isSignInLoading, setIsSignInLoading] = useState(false)

    const {control, handleSubmit, formState: {errors}} = useForm<SignInFields>({
        resolver: yupResolver<SignInFields>(signInFieldsSchema)
    })

    function handleSignIn(data: SignInFields){
        console.log(data);
    }

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
                <Controller
                    control={control}
                    name="user"
                    render={({field: {onChange, value}})=>(
                        <Input
                            title="Usuário"
                            onChangeText={onChange}
                            value={value}
                            errorMessage={errors.user?.message}
                        />
                    )}  
                />
                <Controller
                    control={control}
                    name="password"
                    render={({field: {onChange, value}})=>(
                        <Input
                            title="Senha"
                            onChangeText={onChange}
                            value={value}
                            errorMessage={errors.password?.message}
                        />
                    )}  
                />
            </VStack>
            <Button
                title="Fazer login"
                onPress={handleSubmit(handleSignIn)}
                isLoading={isSignInLoading}
            />
        </VStack>
    )

}