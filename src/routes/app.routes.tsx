import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { QRCodeReader } from "@screens/QRCodeReader"


type AuthRoutes = {
    qrCodeReader: undefined
}

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>()

export function AppRoutes(){

    return (
        <Navigator
            screenOptions={
                {
                    headerShown: false
                }
            }
        >
            <Screen
                name="qrCodeReader"
                component={QRCodeReader}
            />
        </Navigator>
    )
}