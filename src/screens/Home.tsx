import { Header } from "@components/Header";
import { Box, HStack, Heading, SectionList } from "native-base";

import PlusSvg from "@assets/plus.svg"
import { RefuelmentCard } from "@components/RefuelmentCard";
import { TouchableOpacity } from "react-native";

export function Home(){

    const data = [{
        title: "Externos",
        data: ["1", "2", "3"]
    },
    {
        title: "Internos",
        data: ["1", "2", "3"]
    }]

    return (
        <Box
            flex={1}
            bg={"gray.700"}
            px={8}
        >
            <Header/>
            <HStack
                justifyContent={"space-between"}
            >
                <Heading
                    color={"gray.300"}
                    fontSize={"lg"}
                >
                    Seus abastecimentos
                </Heading>
                <TouchableOpacity>
                    <PlusSvg/>
                </TouchableOpacity>
            </HStack>
            <SectionList
                sections={data}
                renderItem={({}) => (
                    <RefuelmentCard/>
                )}
                renderSectionHeader={({section: {title}}) => (
                    <Heading
                        color={"gray.300"}
                        fontSize={"md"}
                        py={6}
                    >
                        {title}
                    </Heading>
                )}
                ItemSeparatorComponent={() => (
                    <Box
                        pt={3}  
                    />
                )}
                contentContainerStyle={{
                    paddingBottom: 60
                }}
                showsVerticalScrollIndicator={false}
            />
        </Box>
    )

}