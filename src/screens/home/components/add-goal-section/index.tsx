import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { AddGoalButton } from 'src/components';

const AddGoalSection = () => {
  return (
    <View className='flex flex-row space-x-8 mb-6'>
      <View className='basis-3/5'>
        <Text className='items-center justify-center text-white text-xl'>
          34 Goals
        </Text>
        <Text className='items-center justify-center text-white'>
          Ambitious person, aren´t you?
        </Text>
      </View>
      <View className='basis-1/3'>
        <AddGoalButton />
      </View>
    </View>
  );
};

export default AddGoalSection;
