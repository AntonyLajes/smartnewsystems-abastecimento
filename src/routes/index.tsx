import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";
import { View } from "native-base";
import { AuthRoutes } from "./auth.routes";

export function Routes(){

    return (
        <View
            flex={1}
            bg={"gray.700"}
        >
            <NavigationContainer>
                <AuthRoutes/>
            </NavigationContainer>
        </View>
    )

}