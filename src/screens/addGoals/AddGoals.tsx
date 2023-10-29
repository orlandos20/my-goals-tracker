import React, { useRef } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import useHandleBottomSheet from 'src/hooks/useHandleBottomSheet';

import { View, Text, useColorScheme } from 'react-native';
import BottomSheet, {
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

import useStyles from './styles';

const AddGoals = () => {
  const addGoalsRef = useRef<BottomSheetModal>(null);
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const { goBack } = useNavigation();
  const styles = useStyles();

  const { snapPoints, handleSheetChanges } = useHandleBottomSheet(addGoalsRef);

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
          <View className='bg-zinc-800 h-full w-full px-4'>
            <Text className='dark:text-white'>Hello</Text>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default AddGoals;
