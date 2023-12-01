import { View, Text } from 'react-native';
import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Layout } from 'src/components';

import { RootStackParamList } from '../../../../types';

type GoalsDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'GoalsDetails'
>;

export default function GoalsDetails(props: GoalsDetailsScreenProps) {
  return (
    <Layout>
      <View>
        <Text>GoalsDetails</Text>
      </View>
    </Layout>
  );
}
