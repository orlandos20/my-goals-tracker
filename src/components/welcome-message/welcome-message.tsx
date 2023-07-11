import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

const WelcomeMessage = () => {
  return (
    <View className='items-center mt-10'>
      <View className='w-3/4 px-1 mb-10 items-center'>
        <Text className='text-gray-400 pb-1.5 text-lg'>Welcome Orlando 👋</Text>
        <Text className='text-white px-2.5 text-3xl text-center'>
          Create your life goal from long{' '}
          <Text className='text-blue-500'>term</Text>
        </Text>
      </View>
    </View>
  );
};

export default WelcomeMessage;
