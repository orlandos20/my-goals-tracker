import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { AddGoalButton } from 'src/components';

const AddGoalSection = () => {
  return (
    <View className='flex flex-row justify-between mb-6'>
      <View>
        <Text className='items-center justify-center text-white text-xl'>
          34 Goals
        </Text>
        <Text className='items-center justify-center text-white'>
          {"Ambitious person, aren't you "}
        </Text>
      </View>
      <View>
        <AddGoalButton />
      </View>
    </View>
  );
};

export default AddGoalSection;
