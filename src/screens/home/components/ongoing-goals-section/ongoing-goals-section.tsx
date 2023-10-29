import { View, Text, Button } from 'react-native';
import React, { useContext } from 'react';

import { GoalCard } from 'src/components';
import { AppContext } from 'src/contexts';

const OngoingGoalsSection = () => {
  const navigation = useContext(AppContext);

  return (
    <View>
      <Text className='dark:text-white text-2xl mb-6'>Ongoing Goals</Text>
      <Button
        title='Go to Details'
        onPress={() => navigation.push('GoalsDetails')}
      />
      <GoalCard />
      <GoalCard />
      <GoalCard />
    </View>
  );
};

export default OngoingGoalsSection;
