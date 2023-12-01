import { View, Text } from 'react-native';
import React from 'react';

const GoalCard = () => {
  return (
    <View className='flex flex-row space-x-4 p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#212124] dark:border-zinc-800'>
      <View>
        <Text className='dark:text-white text-xl tracking-wider'>Icon </Text>
      </View>
      <View>
        <Text className='dark:text-white text-xl tracking-wider'>Meta 1</Text>
        <Text className='text-gray-400 text-base tracking-wider'>
          Aprende algoritmos
        </Text>
      </View>
    </View>
  );
};

export default GoalCard;
