import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import React from 'react';

const GoalsCounter = () => {
  return (
    <View className='flex flex-row justify-evenly mb-6'>
      <View className='w-1/3 text-white bg-zinc-800 hover:bg-zinc-900 font-medium rounded-lg text-sm px-1 py-2.5 mr-2 mb-2 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:focus:ring-zinc-700 dark:border-zinc-700'>
        <Text className='items-center justify-center text-center text-white text-xl'>
          12
        </Text>
        <Text className='items-center justify-center text-center text-white text-xl'>
          News
        </Text>
      </View>
      <View className='w-1/3 text-white bg-zinc-800 hover:bg-zinc-900 font-medium rounded-lg text-sm px-1 py-2.5 mr-2 mb-2 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:focus:ring-zinc-700 dark:border-zinc-700'>
        <Text className='items-center justify-center text-center text-white text-xl'>
          05
        </Text>
        <Text className='items-center justify-center text-center text-white text-xl'>
          Done
        </Text>
      </View>
      <View className='w-1/3 text-white bg-zinc-800 hover:bg-zinc-900 font-medium rounded-lg text-sm px-1 py-2.5 mb-2 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:focus:ring-zinc-700 dark:border-zinc-700'>
        <Text className='items-center justify-center text-center text-white text-xl'>
          13
        </Text>
        <Text className='items-center justify-center text-center text-white text-xl'>
          Complete
        </Text>
      </View>
    </View>
  );
};

export default GoalsCounter;
