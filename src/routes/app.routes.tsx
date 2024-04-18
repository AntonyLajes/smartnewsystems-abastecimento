import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Home } from "@screens/Home"
import { NewRefueling } from "@screens/NewRefueling"
import { QRCodeReader } from "@screens/QRCodeReader"


type AuthRoutes = {
    qrCodeReader: undefined,
    home: undefined,
    newFueling: undefined
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
                name="newFueling"
                component={NewRefueling}
            />
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