import { forwardRef, useCallback, useMemo, useRef } from "react";
import { Box, HStack, Heading, VStack, IBoxProps, Text, View } from "native-base";

import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from "@gorhom/bottom-sheet";

import { Button } from "@components/Button";
import { Input } from "@components/Input";

type Props = {
    bottomSheetRef: React.RefObject<BottomSheet>,
    handleClosePress: () => void | undefined
}

const InsertPin = forwardRef<BottomSheet, Props>((props: Props, ref) => {

    const snapPoints = useMemo(() => ["40%", "65%"], [])

    const firstInputRef = useRef<any>(null)
    const secondInputRef = useRef<any>(null)

    console.log(`log => ${firstInputRef.current}`);

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
            props.handleClosePress()
        }
    }, [props]);

    const handleChangeFirstInput = (text: string) => {
        console.log(text)
        console.log(firstInputRef.current)
        console.log(secondInputRef.current)

        if (text.length === 1 && secondInputRef.current) {
            secondInputRef.current.focus()
        }
    }

    return (
        <BottomSheet
            ref={props.bottomSheetRef}
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
                >
                    <Heading
                        color={"gray.100"}
                        fontSize={"lg"}
                        alignSelf={"center"}
                    >
                        Inserir o PIN
                    </Heading>

                    <HStack>
                        <Input
                            ref={firstInputRef}
                            placeholder="000-000"
                            textAlign={"center"}
                            onChangeText={handleChangeFirstInput}
                        />
                    </HStack>
                    <VStack
                        space={1}
                        py={8}
                    >
                        <Button
                            title={"Cancelar"}
                            variant={"secondary"}
                            onPress={props.handleClosePress}
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
})

export default InsertPin