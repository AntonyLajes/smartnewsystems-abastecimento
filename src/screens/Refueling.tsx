import { RefuelingStepsHeader } from "@components/RefuelingStepsHeader";
import { Box, Divider, HStack, ScrollView, Text, VStack } from "native-base";
import { RefuelingFirstStep } from "./RefuelingFirstStep";
import { RefuelmentSteps } from "@components/RefuelmentSteps";
import { useRef, useState } from "react";
import { Button } from "@components/Button";
import { RefuelingSecondStep } from "./RefuelingSecondStep";
import { RefuelingThirdStep } from "./RefuelingThirdStep";
import { RefuelingFourthStep } from "./RefuelingFourthStep";
import { useNavigation } from "@react-navigation/native";
import InsertPin from "./InsertPin";
import BottomSheet from "@gorhom/bottom-sheet";

export function Refueling() {

    const bottomSheetRef = useRef<BottomSheet>(null)
    const handleClosePress = () => {
        bottomSheetRef.current?.close()
        setHandleInsertPin(false)
    }
    const handleOpenPress = () => bottomSheetRef.current?.expand()
    
    const navigation = useNavigation()
    const [currentFormStep, setCurrentFormSteps] = useState(1)
    const [handleInsertPin, setHandleInsertPin] = useState(false)
    const formSteps = 4

    function handleBackButton() {
        currentFormStep === 1 ? navigation.goBack() : setCurrentFormSteps(currentFormStep - 1)
        handleInsertPin && setHandleInsertPin(false)
    }

    function handleSave() {
        if (currentFormStep < formSteps) {
            setCurrentFormSteps(currentFormStep + 1)
        }
        if(currentFormStep === formSteps){
            setHandleInsertPin(true)
        }
        handleOpenPress
    }

    return (
        <VStack
            flex={1}
            bg={"gray.700"}
        >
            <RefuelingStepsHeader
                onPress={() => navigation.goBack()}
            />
            <Box
                flex={1}
            >
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
                            <RefuelingFirstStep /> :
                            currentFormStep == 2 ?
                            <RefuelingSecondStep /> :
                            currentFormStep == 3 ?
                            <RefuelingThirdStep /> :
                            <RefuelingFourthStep />
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
                                onPress={handleSave}
                            />
                        </VStack>
                    </Box>
                </ScrollView>
            </Box>
            {
                handleInsertPin &&
                <InsertPin
                    bottomSheetRef={bottomSheetRef}
                    handleClosePress={handleClosePress}
                />
            }
        </VStack>
    )
}