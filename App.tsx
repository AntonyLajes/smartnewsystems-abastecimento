import 'react-native-gesture-handler';
import {NativeBaseProvider, Text } from "native-base";

import { useFonts, Inter_400Regular, Inter_700Bold, Inter_900Black } from "@expo-google-fonts/inter";
import { dayTheme } from "@themes/dayTheme";

import { Splash } from '@components/Splash';
import { Routes } from '@routes/index';

export default function App() {

  const [fontsLoaded] = useFonts({Inter_400Regular, Inter_700Bold, Inter_900Black})

  return (
      <NativeBaseProvider theme={dayTheme}>
        { 
          !fontsLoaded ?
          <Routes/> : 
          <Splash/> 
        }
      </NativeBaseProvider>
    );
}