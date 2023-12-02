import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import { createGoal } from 'src/modules/goals/application/create/create';
import { createApiGoalRepository } from 'src/modules/goals/infra/apiGoalRepository';

import { AddGoalButton } from 'src/components';

import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../types';

type GoalFormInputs = {
  title: string;
  description: string;
  reminder: Date;
  deadline: Date;
};

type FormProps = {
  formValuesPropsForDetails?: GoalFormInputs;
};

const GoalForm: React.FC<FormProps> = ({ formValuesPropsForDetails }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<GoalFormInputs>({
    defaultValues: formValuesPropsForDetails
      ? formValuesPropsForDetails
      : {
          title: '',
          description: '',
          reminder: new Date(),
          deadline: new Date(),
        },
  });

  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onSubmit = async (data: GoalFormInputs) => {
    console.log(data);
    const goalRepository = createApiGoalRepository();

    const savedGoal = await createGoal(goalRepository)(data);

    console.log('savedGoal --> ', savedGoal);

    if (savedGoal) {
      navigate('Home');
    }
  };

  console.log('errors', errors);

  return (
    <View>
      <View className='dark:bg-[#212124] p-4 rounded-2xl mb-4'>
        <Text className='dark:text-gray-600 light:text-black mb-1 ml-0'>
          Title
        </Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className='dark:bg-[#212124] light:bg-slate-200 dark:text-gray-400 light:text-black'
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name='title'
          rules={{ required: true }}
        />
      </View>

      <View className='dark:bg-[#212124] p-4 rounded-2xl mb-4'>
        <Text className='dark:text-gray-600 light:text-black mb-1 ml-0'>
          Goal description
        </Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className='dark:bg-[#212124] light:bg-slate-200 dark:text-gray-400 light:text-black'
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name='description'
          rules={{ required: true }}
        />
      </View>

      {/* Reminder input */}
      <View className='dark:bg-[#212124] p-4 rounded-2xl mb-4'>
        <Text className='dark:text-gray-600 light:text-black mb-1 ml-0'>
          Reminder
        </Text>
        {/* TODO: investigate Date inputs in RN */}
        {/* <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className='dark:bg-[#212124] light:bg-slate-200 dark:text-gray-400 light:text-black'
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name='reminder'
          rules={{ required: true }}
        /> */}
      </View>
      {/* END Reminder Input */}

      {/* Deadline input */}
      <View className='dark:bg-[#212124] p-4 rounded-2xl mb-4'>
        <Text className='dark:text-gray-600 light:text-black mb-1 ml-0'>
          Expected Maturity date
        </Text>
        {/* TODO: investigate Date inputs in RN */}
        {/* <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className='dark:bg-[#212124] light:bg-slate-200 dark:text-gray-400 light:text-black'
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name='reminder'
          rules={{ required: true }}
        /> */}
      </View>
      {/* END Deadline input */}

      {/* Reset button */}
      {/* <View style={styles.button}>
        <Button
          //   style={styles.buttonInner}
          //   color
          title='Reset'
          onPress={() => {
            reset({
              title: 'Bill',
              description: 'Luo',
            });
          }}
        />
      </View> */}
      {/* END Reset Button */}

      <View>
        <AddGoalButton onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

export default GoalForm;
