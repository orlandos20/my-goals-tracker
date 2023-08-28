import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { View, useColorScheme, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeWindStyleSheet } from 'nativewind';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import AppLightTheme from 'src/styles/AppLightTheme';
import AppDarkTheme from 'src/styles/AppDarkTheme';
import { RootStackParamList } from './types';

import { HomeScreen, AddGoals, GoalsDetails } from 'src/features';

const Stack = createNativeStackNavigator<RootStackParamList>();

import { AppContextProvider } from 'src/contexts';

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppContextProvider>
        <NavigationContainer
          theme={colorScheme === 'light' ? AppLightTheme : AppDarkTheme}
          independent
        >
          <BottomSheetModalProvider>
            <View style={{ height: '100%' }}>
              <SafeAreaProvider>
                <StatusBar style='auto' />
                <Stack.Navigator data-testId='home-navigator'>
                  <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{
                      animation: 'fade_from_bottom',
                    }}
                  />
                  <Stack.Screen
                    name='AddGoals'
                    component={AddGoals}
                    options={{
                      presentation: 'containedTransparentModal',
                      headerShown: Platform.OS === 'ios',
                      animation: 'fade_from_bottom',
                    }}
                  />
                  <Stack.Screen
                    name='GoalsDetails'
                    component={GoalsDetails}
                    options={{
                      animation: 'slide_from_right',
                    }}
                  />
                </Stack.Navigator>
              </SafeAreaProvider>
            </View>
          </BottomSheetModalProvider>
        </NavigationContainer>
      </AppContextProvider>
    </GestureHandlerRootView>
  );
}

NativeWindStyleSheet.setOutput({
  default: 'native',
});
