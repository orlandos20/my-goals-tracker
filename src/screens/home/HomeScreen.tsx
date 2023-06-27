import { StyleSheet, Text, Button } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';

import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import Layout from 'src/components/Layout';

import { RootStackParamList } from '../../../types';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen(props: HomeScreenProps) {
  const { colors } = useTheme();

  return (
    <Layout>
      <Text style={{ fontSize: 16, color: colors.text }}>Home Screen</Text>
      {/* <Text style={{ fontSize: 16, color: colors.text }}>
        Open up App.tsx to start working on your app! Initialized
      </Text> */}
      <Button
        title='Go to Details'
        onPress={() => props.navigation.push('Details')}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({});
