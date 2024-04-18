import { Box, HStack, Heading, VStack, Text } from "native-base";

import FuelBombSvg from "@assets/fuel_bomb.svg"
import UserSvg from "@assets/user.svg"
import CalendarSvg from "@assets/calendar.svg"
import { TouchableOpacity } from "react-native";

export function FuelmentCard(){

    return (
        <TouchableOpacity
            style={{
                backgroundColor: "#282828",
                paddingHorizontal: 16,
                paddingVertical: 24,
                borderTopLeftRadius:8,
                borderTopRightRadius:36,
                borderBottomRightRadius:8,
                borderBottomLeftRadius:36
            }}
        >
            <HStack
                alignItems={"center"}
                space={4}
            >
                <FuelBombSvg/>
                <VStack
                    flex={1}
                    space={2}
                >
                    <Heading
                        fontSize={"md"}
                        color={"gray.100"}
                        numberOfLines={1}
                        pr={4}
                    >
                        CD - 001 Mercedes BenzCD - 001 Mercedes BenzCD - 001 Mercedes BenzCD - 001 Mercedes Benz
                    </Heading>
                    <HStack
                        justifyContent={"space-between"}
                        space={8}
                    >
                        <HStack
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            space={2}
                            flex={1}
                        >
                            <UserSvg
                            />
                            <Text
                                color={"gray.300"}
                                fontSize={"md"}
                                numberOfLines={1}
                            >
                                user.useruser.useruser.useruser.user
                            </Text>
                        </HStack>
                        <HStack
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            space={2}
                            flex={1}
                        >
                            <CalendarSvg/>
                            <Text
                                color={"gray.300"}
                                fontSize={"md"}
                                numberOfLines={1}
                            >
                                18/04/2024
                            </Text>
                        </HStack>
                    </HStack>
                </VStack>
            </HStack>
        </TouchableOpacity>
    )

}