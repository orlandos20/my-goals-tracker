import { View, Text } from 'react-native';
import React, { useContext } from 'react';

import { GoalContext } from 'src/contexts';

import { GoalCard } from 'src/components';

const OngoingGoalsSection = () => {
  const { goals } = useContext(GoalContext);

  return (
    <View>
      <Text className='dark:text-white text-2xl mb-6'>Ongoing Goals</Text>
      {goals &&
        goals?.length > 0 &&
        goals?.map((goal) => <GoalCard key={goal.title} {...goal} />)}
    </View>
  );
};

export default OngoingGoalsSection;
