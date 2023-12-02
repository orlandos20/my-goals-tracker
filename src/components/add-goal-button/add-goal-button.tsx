import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../types';

type AddGoalButtonProps = {
  onPress?: () => void;
};

const AddGoalButton: React.FC<AddGoalButtonProps> = ({ onPress }) => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handlePress = () => {
    if (onPress && typeof onPress === 'function') {
      return onPress();
    }

    navigate('AddGoals');
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      // onPress={handlePresentModalPress}
      className='items-center text-white bg-blue-700 font-medium rounded-2xl text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600'
    >
      <Text className='items-center justify-center text-white'>Add Goals</Text>
    </TouchableOpacity>
  );
};

export default AddGoalButton;
