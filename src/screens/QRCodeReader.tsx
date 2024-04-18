import { useState } from "react"
import { Text, VStack } from "native-base"
import { useNavigation, useRoute } from "@react-navigation/native"

import { Header } from "@components/Header"
import { QRCodeCamera } from "@components/QRCodeCamera"
import { Button } from "@components/Button"

type RouteParams = {
    variant: "tanque" | "equipamento"
}

export function QRCodeReader(){

    const [scannedData, setScannedData] = useState<string>("")
    const route = useRoute()
    const { variant } = route.params as RouteParams
    const navigation = useNavigation()

    function handleGoBack() {
        navigation.goBack()
    }

    return (
        <VStack
            bg={"gray.700"}
            px={8}
            pb={8}
            flex={1}
        >
            <Header/>
            <VStack
                flex={1}
                justifyContent={"center"}
                space={8}
                mt={-16}
            >
                <Text
                    color={"gray.300"}
                    fontSize={"md"}
                >
                    Escaneie o QR Code do {variant} no campo abaixo:
                </Text>
                <QRCodeCamera
                    scannedData={setScannedData}
                />
            </VStack>
            {
                variant === "equipamento" &&
                <Button
                    title="Cancelar"
                    variant={"secondary"}
                    onPress={handleGoBack}
                />
            }
        </VStack>
    )

}