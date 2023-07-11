import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Layout, WelcomeMessage } from 'src/components';
import { AddGoalSection } from './components';

import { RootStackParamList } from '../../../types';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen(props: HomeScreenProps) {
  const { colors } = useTheme();

  return (
    <Layout>
      <WelcomeMessage />
      <AddGoalSection />
      <Button
        title='Go to Details'
        onPress={() => props.navigation.push('Details')}
      />
    </Layout>
  );
}
