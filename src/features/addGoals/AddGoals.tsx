import React, { useRef } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import useHandleBottomSheet from 'src/hooks/useHandleBottomSheet';

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  useColorScheme,
} from 'react-native';
import BottomSheet, {
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

import { GoalForm } from 'src/sections';

import useStyles from './styles';

const AddGoals = () => {
  const addGoalsRef = useRef<BottomSheetModal>(null);
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const { goBack } = useNavigation();
  const styles = useStyles();

  const {
    sheetIsOpen,
    sheetRef,
    handlePresentModalPress,
    snapPoints,
    handleSnapPress,
    handleClose,
    handleSheetChanges,
  } = useHandleBottomSheet(addGoalsRef);

  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <Text>AddGoals</Text>

      <BottomSheet
        ref={addGoalsRef}
        snapPoints={snapPoints}
        enablePanDownToClose
        detached
        handleStyle={
          colorScheme === 'light'
            ? styles.light.handleStyles
            : styles.dark.handleStyles
        }
        handleIndicatorStyle={
          colorScheme === 'light'
            ? styles.light.handleIndicatorStyle
            : styles.dark.handleIndicatorStyle
        }
        onChange={(index) => {
          handleSheetChanges(index, goBack);
        }}
      >
        <BottomSheetView>
<<<<<<< Updated upstream:src/features/addGoals/AddGoals.tsx
          <View className='bg-zinc-800 h-full w-full'>
            <Text className='dark:text-white'>Hello</Text>
=======
          <View className='dark:bg-[#161618] light:bg-zinc-800 h-full w-full p-4'>
            <GoalForm />
>>>>>>> Stashed changes:src/screens/addGoals/AddGoals.tsx
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default AddGoals;
