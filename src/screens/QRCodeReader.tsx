import { Text, VStack } from "native-base"

import { Header } from "@components/Header"
import { QRCodeCamera } from "@components/QRCodeCamera"
import { useState } from "react"

type Props = {
    variant?: "tanque" | "equipamento"
}

export function QRCodeReader({variant = "tanque"}: Props){

    const [scannedData, setScannedData] = useState<string>("")

    console.log(scannedData);
    

    return (
        <VStack
            bg={"gray.700"}
            px={8}
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
        </VStack>
    )

}