import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';

const AddGoalButton = () => {
  return (
    <TouchableOpacity className='items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
      <Text className='items-center justify-center text-white'>Add Goals</Text>
    </TouchableOpacity>
  );
};

export default AddGoalButton;
