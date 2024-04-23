import { forwardRef, useCallback, useMemo, useRef } from "react";
import { Box, HStack, Heading, VStack, IBoxProps, Text, View } from "native-base";

import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from "@gorhom/bottom-sheet";

import { Button } from "@components/Button";
import InputWithRef from "@components/InputWithRef";
import { Keyboard } from "react-native";

type Props = {
    bottomSheetRef: React.RefObject<BottomSheet>,
    handleClosePress: () => void | undefined
}

export function InsertPin({bottomSheetRef, handleClosePress}: Props){

    const snapPoints = useMemo(() => ["40%", "65%"], [])

    const inputRefs = useRef<Array<React.MutableRefObject<any>>>([
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ])

    const errorMessage: string | null = null
    const isInvalid: boolean = false

    const invalid = !!errorMessage || isInvalid

    const handleInputTextChange = (index: number) => (text: string) => {
        const nextIndex = index + 1
        const prevIndex = index - 1

        if(text.length === 1 && index < inputRefs.current.length - 1){
            inputRefs.current[nextIndex].current?.focus()
        }else if(text.length === 0 && prevIndex >= 0){
            inputRefs.current[index].current?.focus()
        }else{
            Keyboard.dismiss()
        }
    }

    const renderBackdrop = useCallback(
        (props: any) => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={0}
            />
        ),
        []
    );

    const handleSheetChanges = useCallback((index: number) => {
        if (index === -1) {
            handleClosePress()
        }
    }, []);

    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}
            backgroundStyle={{
                backgroundColor: "#343434"
            }}
            style={{
                flex: 1,
                paddingHorizontal: 16
            }}
            onChange={handleSheetChanges}
        >
            <BottomSheetView
                style={{
                    flex: 1
                }}
            >
                <VStack
                    flex={1}
                    py={8}
                    justifyContent={"space-between"}
                >
                    <Heading
                        color={"gray.100"}
                        fontSize={"lg"}
                        alignSelf={"center"}
                    >
                        Inserir o PIN
                    </Heading>

                    <VStack
                        space={1}
                    >
                        <Text
                            color={invalid ? "error.600" :"gray.100"}
                            fontSize={"sm"}
                        >
                            Digite o PIN:
                        </Text>
                        <HStack>
                            {
                                inputRefs.current.map((ref, index) => (
                                    <InputWithRef
                                        key={index}
                                        fontSize={"lg"}
                                        textAlign={"center"}
                                        placeholder="0"
                                        onChangeText={handleInputTextChange(index)}
                                        forwardRef={ref}
                                    />
                                ))
                            }
                        </HStack>
                    </VStack>
                    <VStack
                        space={1}
                        py={8}
                    >
                        <Button
                            title={"Cancelar"}
                            variant={"secondary"}
                            onPress={handleClosePress}
                        />
                        <Button
                            title={"Verificar"}
                            variant={"primary"}
                        />
                    </VStack>
                </VStack>
            </BottomSheetView>
        </BottomSheet>
    )
}