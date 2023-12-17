import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { AddGoalButton } from 'src/components';
import { GoalContext } from 'src/contexts';

const AddGoalSection = () => {
  const { goals } = useContext(GoalContext);

  return (
    <View className='flex flex-row justify-between mb-6'>
      <View>
        <Text className='items-center justify-center dark:text-white text-xl'>
          {`${goals?.length} Goals`}
        </Text>
        <Text className='items-center justify-center dark:text-white'>
          {"Ambitious person, aren't you? "}
        </Text>
      </View>
      <View>
        <AddGoalButton />
      </View>
    </View>
  );
};

export default AddGoalSection;
