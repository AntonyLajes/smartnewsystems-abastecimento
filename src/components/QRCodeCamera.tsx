import { BarCodeScanningResult, Camera, CameraType } from "expo-camera"
import { Box, Heading, Text } from "native-base"
import { useEffect, useState } from "react"

type Props = {
    scannedData: (value: string) => void
}

export function QRCodeCamera({scannedData}: Props){

    const [hasPermission, setHasPermission] = useState(false)
    const [scanned, setScanned] = useState(false)

    async function handleCameraPermission() {
        const {granted} = await Camera.requestCameraPermissionsAsync()
        setHasPermission(granted)
    }

    function handleBarCodeScanned(scanningResult: BarCodeScanningResult) {
        setScanned(true)
        scannedData(scanningResult.data)
    }
    
    useEffect(() => {
        handleCameraPermission()
    }, [])

    return (
        <Box
            w={"full"}
            height={325}
            rounded={16}
            overflow={"hidden"}
            alignSelf={"center"}
        >
            <Camera
                style={{
                    flex: 1
                }}
                type={CameraType.back}
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            />

            <Heading
                fontSize={"sm"}
                color={"gray.300"}
                position={"absolute"}
                alignSelf={"center"}
                bg={"gray.700-transparency"}
                px={6}
                py={2}
                mt={2}
                rounded={8}
                >
                Aponte para o QR Code
            </Heading>
        </Box>
    )

}