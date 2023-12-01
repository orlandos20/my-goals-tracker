import { View, Text } from 'react-native';
import React from 'react';

import { GoalCard } from 'src/components';

const OngoingGoalsSection = () => {
  return (
    <View>
      <Text className='dark:text-white text-2xl mb-6'>Ongoing Goals</Text>
      <GoalCard />
      <GoalCard />
      <GoalCard />
      <GoalCard />
      <GoalCard />
      <GoalCard />
    </View>
  );
};

export default OngoingGoalsSection;
