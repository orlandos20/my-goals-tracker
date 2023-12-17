import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { GoalContext } from 'src/contexts';

const GoalsCounter = () => {
  const { goals } = useContext(GoalContext);

  return (
    <View className='flex flex-row justify-evenly mb-6'>
      <View className='w-1/3 dark:text-white bg-white hover:bg-zinc-900 font-medium rounded-lg text-sm px-1 py-2.5 mr-2 mb-2 dark:bg-[#212124] dark:hover:bg-zinc-700 dark:focus:ring-zinc-700 dark:border-zinc-700'>
        <Text className='items-center justify-center text-center dark:text-white text-xl'>
          {`${goals?.length}`}
        </Text>
        <Text className='items-center justify-center text-center dark:text-white text-xl'>
          News
        </Text>
      </View>
      <View className='w-1/3 dark:text-white bg-white hover:bg-gray-100 font-medium rounded-lg text-sm px-1 py-2.5 mr-2 mb-2 dark:bg-[#212124] dark:hover:bg-zinc-700 dark:focus:ring-zinc-700 dark:border-zinc-700'>
        <Text className='items-center justify-center text-center dark:text-white text-xl'>
          0
        </Text>
        <Text className='items-center justify-center text-center dark:text-white text-xl'>
          Done
        </Text>
      </View>
      <View className='w-1/3 dark:text-white bg-white hover:bg-gray-100 font-medium rounded-lg text-sm px-1 py-2.5 mb-2 dark:bg-[#212124] dark:hover:bg-zinc-700 dark:focus:ring-zinc-700 dark:border-zinc-700'>
        <Text className='items-center justify-center text-center dark:text-white text-xl'>
          0
        </Text>
        <Text className='items-center justify-center text-center dark:text-white text-xl'>
          Complete
        </Text>
      </View>
    </View>
  );
};

export default GoalsCounter;
