import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack"

import { Home } from "@screens/Home"
import { NewRefueling } from "@screens/NewRefueling"
import { QRCodeReader } from "@screens/QRCodeReader"
import { RefuelingFirstStep } from "@screens/RefuelingFirstStep"


type AuthRoutes = {
    qrCodeReader: {
        variant: "tanque" | "equipamento"
    },
    home: undefined,
    newFueling: undefined,
    refuelingFirstStep: undefined
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>()

export function AppRoutes(){

    return (
        <Navigator
            screenOptions={
                {
                    headerShown: false
                }
            }
            initialRouteName="refuelingFirstStep"
        >
            <Screen
                name="newFueling"
                component={NewRefueling}
            />
            <Screen
                name="qrCodeReader"
                component={QRCodeReader}
            />
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="refuelingFirstStep"
                component={RefuelingFirstStep}
            />
        </Navigator>
    )
}