import { useState } from "react";

import { HStack, Image, Pressable, ScrollView, VStack } from "native-base";

import * as ImagePicker from "expo-image-picker"

import AddSvg from "@assets/add.svg"

import { Input } from "@components/Input";

export function RefuelingFourthStep() {

    const [photos, setPhotos] = useState<string[]>([])

    async function pickImage() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
        })

        result.assets?.map((value, index) => {
            setPhotos([...photos, value.uri])
        })
    }

    return (
        <VStack
            space={4}
        >
            <ScrollView
                flexGrow={1}
                flex={1}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <HStack
                    space={2}
                >
                    {
                        photos.map((value, index) => (
                            <Image
                                size={20}
                                rounded={"8"}
                                source={{ uri: value }}
                                alt=""
                                key={value + '1'}
                            />
                        ))
                    }
                    <Pressable
                        bg={"gray.800"}
                        p={4}
                        rounded={"8"}
                        onPress={pickImage}
                        size={20}
                        justifyContent={"center"}
                        alignItems={"center"}
                        borderWidth={2}
                        borderColor={"gray.400"}
                        borderStyle={"dashed"}
                    >
                        <AddSvg />
                    </Pressable>
                </HStack>
            </ScrollView>
            <Input
                title="Observações"
                numberOfLines={5}
                h={150}
                textAlignVertical="top"
            />
        </VStack>
    )

}