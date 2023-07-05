import { StyleSheet, Text, Button } from 'react-native';
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
      <Button
        title='Go to Details'
        onPress={() => props.navigation.push('Details')}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({});
