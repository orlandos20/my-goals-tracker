import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';

import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import { Layout, WelcomeMessage } from 'src/components';

import { RootStackParamList } from '../../../types';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen(props: HomeScreenProps) {
  const { colors } = useTheme();

  return (
    <Layout>
      <WelcomeMessage />
      <View className='flex-1 justify-start px-2.5'>
        <Text className='items-center justify-center text-white'>
          Open up App.js to start working on your app!
        </Text>
        <TouchableOpacity className='items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
          <Text className='items-center justify-center text-white'>
            Add Goals
          </Text>
        </TouchableOpacity>
      </View>
      <Button
        title='Go to Details'
        onPress={() => props.navigation.push('Details')}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({});
