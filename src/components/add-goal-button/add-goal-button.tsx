import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';

const AddGoalButton = () => {
  return (
    <TouchableOpacity className='items-center text-white bg-blue-700 font-medium rounded-2xl text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600'>
      <Text className='items-center justify-center text-white'>Add Goals</Text>
    </TouchableOpacity>
  );
};

export default AddGoalButton;
