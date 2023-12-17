import React, { useContext, useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Layout } from 'src/components';

import { RootStackParamList } from '../../../../types';
import { GoalContext } from 'src/contexts';
import { Goal } from 'src/modules/goals/domain/goal';

type GoalsDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'GoalsDetails'
>;

export default function GoalsDetails({ route }: GoalsDetailsScreenProps) {
  const [goal, setGoal] = useState<Goal>();
  const {
    params: { id },
  } = route;

  const { getGoalById } = useContext(GoalContext);

  const getGoal = async () => {
    const goal = await getGoalById(id);

    if (goal) {
      setGoal(goal);
    }
  };

  useEffect(() => {
    getGoal();
  }, []);

  return (
    <Layout>
      <View>
        <Text className='dark:text-white text-xl tracking-wider'>
          GoalsDetails
        </Text>
        <Text className='dark:text-white text-xl tracking-wider'>
          {goal && goal?.title}
        </Text>
        <Text className='dark:text-white text-xl tracking-wider'>
          {goal && goal?.description}
        </Text>
      </View>
    </Layout>
  );
}
