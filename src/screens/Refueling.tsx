import { RefuelingStepsHeader } from "@components/RefuelingStepsHeader";
import { Box, Divider, HStack, ScrollView, Text, VStack } from "native-base";
import { RefuelingFirstStep } from "./RefuelingFirstStep";
import { RefuelmentSteps } from "@components/RefuelmentSteps";
import { useState } from "react";
import { Button } from "@components/Button";
import { RefuelingSecondStep } from "./RefuelingSecondStep";
import { RefuelingThirdStep } from "./RefuelingThirdStep";
import { RefuelingFourthStep } from "./RefuelingFourthStep";
import { useNavigation } from "@react-navigation/native";

export function Refueling(){

    const navigation = useNavigation()
    const [currentFormStep, setCurrentFormSteps] = useState(1)
    const formSteps = 4

    function handleBackButton() {
        currentFormStep === 1 ? navigation.goBack() : setCurrentFormSteps(currentFormStep -1)
    }

    return (
        <VStack
            flex={1}
            bg={"gray.700"}
        >
            <RefuelingStepsHeader
                onPress={() => navigation.goBack()}
            />
            <RefuelmentSteps
                steps={formSteps}
                current={currentFormStep}
            />
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingBottom: 32
                }}
            >
                <Box
                    px={8}
                    flex={1}
                    justifyContent={"space-between"}
                >
                    {
                        currentFormStep == 1 ?
                        <RefuelingFirstStep/> :
                        currentFormStep == 2 ?
                        <RefuelingSecondStep/> :
                        currentFormStep == 3 ?
                        <RefuelingThirdStep/> :
                        <RefuelingFourthStep/>
                    }
                    <VStack
                        space={1}
                        py={8}
                    >
                        <Button
                            title={currentFormStep === 1 ? "Cancelar" : "Voltar"}
                            variant={"secondary"}
                            onPress={handleBackButton}
                        />
                        <Button
                            title={currentFormStep === formSteps ? "Salvar" : "Próximo"}
                            variant={"primary"}
                            onPress={() => setCurrentFormSteps(currentFormStep + 1)}
                        />
                    </VStack>
                </Box>
            </ScrollView>
        </VStack>
    )
}