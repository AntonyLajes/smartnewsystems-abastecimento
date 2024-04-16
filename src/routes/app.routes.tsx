import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "@screens/Home"


type AuthRoutes = {
    home: undefined
}

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>()

export function AppRoutes(){
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen
                name="home"
                component={Home}
            />
        </Navigator>
    )
}