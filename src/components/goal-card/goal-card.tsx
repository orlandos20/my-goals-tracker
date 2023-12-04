import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Goal } from 'src/modules/goals/domain/goal';

import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../types';

type GoalCardProps = Partial<Goal>;

const GoalCard: React.FC<GoalCardProps> = ({ title, description }) => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity onPress={() => navigate('GoalsDetails')}>
      <View className='flex flex-row space-x-4 p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#212124] dark:border-zinc-800'>
        <View>
          <Text className='dark:text-white text-xl tracking-wider'>Icon </Text>
        </View>
        <View>
          <Text className='dark:text-white text-xl tracking-wider'>
            {title}
          </Text>
          <Text className='text-gray-400 text-base tracking-wider'>
            {description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GoalCard;
