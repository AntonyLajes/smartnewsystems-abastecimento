import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "@screens/Home"
import { QRCodeReader } from "@screens/QRCodeReader"


type AuthRoutes = {
    qrCodeReader: undefined,
    home: undefined
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
                name="home"
                component={Home}
            />
            <Screen
                name="qrCodeReader"
                component={QRCodeReader}
            />
        </Navigator>
    )
}