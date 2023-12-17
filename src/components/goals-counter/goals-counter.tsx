import React, { useState, useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import { GoalContext } from 'src/contexts';

const initialState = {
  new: 0,
  inProgress: 0,
  completed: 0,
};

const GoalsCounter = () => {
  const [goalsByState, setGoalsByState] = useState<
    typeof initialState | undefined
  >();
  const { goals } = useContext(GoalContext);

  const separateByState = () => {
    const byState = {
      new: 0,
      inProgress: 0,
      completed: 0,
    };

    if (!goals?.length) {
      setGoalsByState(initialState);

      return;
    }

    goals?.map((goal) => {
      const isNew = !goal.inProgress && !goal.completed;

      if (isNew) return (byState.new = ++byState.new);
      if (goal.inProgress) return (byState.inProgress = ++byState.inProgress);
      if (goal.completed) return (byState.completed = ++byState.completed);
    });

    setGoalsByState(byState);
  };

  useEffect(() => {
    separateByState();
  }, []);

  return (
    <View className='flex flex-row justify-evenly mb-6'>
      <View className='w-1/3 dark:text-white bg-white hover:bg-zinc-900 font-medium rounded-lg text-sm px-1 py-2.5 mr-2 mb-2 dark:bg-[#212124] dark:hover:bg-zinc-700 dark:focus:ring-zinc-700 dark:border-zinc-700'>
        <Text className='items-center justify-center text-center dark:text-white text-xl'>
          {`${goalsByState?.new}`}
        </Text>
        <Text className='items-center justify-center text-center dark:text-white text-xl'>
          News
        </Text>
      </View>
      <View className='w-1/3 dark:text-white bg-white hover:bg-gray-100 font-medium rounded-lg text-sm px-1 py-2.5 mr-2 mb-2 dark:bg-[#212124] dark:hover:bg-zinc-700 dark:focus:ring-zinc-700 dark:border-zinc-700'>
        <Text className='items-center justify-center text-center dark:text-white text-xl'>
          {`${goalsByState?.inProgress}`}
        </Text>
        <Text className='items-center justify-center text-center dark:text-white text-xl'>
          In progress
        </Text>
      </View>
      <View className='w-1/3 dark:text-white bg-white hover:bg-gray-100 font-medium rounded-lg text-sm px-1 py-2.5 mb-2 dark:bg-[#212124] dark:hover:bg-zinc-700 dark:focus:ring-zinc-700 dark:border-zinc-700'>
        <Text className='items-center justify-center text-center dark:text-white text-xl'>
          {`${goalsByState?.completed}`}
        </Text>
        <Text className='items-center justify-center text-center dark:text-white text-xl'>
          Complete
        </Text>
      </View>
    </View>
  );
};

export default GoalsCounter;
