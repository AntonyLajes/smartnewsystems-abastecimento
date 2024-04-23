import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {Box, NativeBaseProvider } from "native-base";

import { useFonts, Inter_400Regular, Inter_700Bold, Inter_900Black } from "@expo-google-fonts/inter";
import { dayTheme } from "@themes/dayTheme";

import { Splash } from '@components/Splash';
import { Routes } from '@routes/index';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

export default function App() {

  const [fontsLoaded] = useFonts({Inter_400Regular, Inter_700Bold, Inter_900Black})

  return (
      <NativeBaseProvider theme={dayTheme}>
        <GestureHandlerRootView style={{flex: 1}}>
          <StatusBar
            translucent
            style='light'
          />

          <Box
            flex={1}
          >
            { 
              fontsLoaded ?
              <Routes/> : 
              <Splash/> 
            }
          </Box>
        </GestureHandlerRootView>
      </NativeBaseProvider>
    );
}