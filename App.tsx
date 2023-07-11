import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeWindStyleSheet } from 'nativewind';

import AppLightTheme from 'src/styles/AppLightTheme';
import AppDarkTheme from 'src/styles/AppDarkTheme';
import { RootStackParamList } from './types';

import { HomeScreen } from 'src/screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer
      theme={colorScheme === 'light' ? AppLightTheme : AppDarkTheme}
    >
      <View style={{ height: '100%' }}>
        <SafeAreaProvider>
          <StatusBar style='auto' />
          <Stack.Navigator data-testId='home-navigator'>
            <Stack.Screen name='Home' component={HomeScreen} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </View>
    </NavigationContainer>
  );
}

NativeWindStyleSheet.setOutput({
  default: 'native',
});
