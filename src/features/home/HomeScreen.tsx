import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Layout, WelcomeMessage, GoalsCounter } from 'src/components';
import { AddGoalSection, OngoingGoalsSection } from './components';

import { RootStackParamList } from '../../../types';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen(props: HomeScreenProps) {
  return (
    <Layout>
      <WelcomeMessage />
      <AddGoalSection />
      <GoalsCounter />
      <OngoingGoalsSection />
      <Button
        title='Go to Details'
        onPress={() => props.navigation.push('GoalsDetails')}
      />
    </Layout>
  );
}
