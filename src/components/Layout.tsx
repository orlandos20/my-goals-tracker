import React, { useContext } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  useColorScheme,
} from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { AppContext } from 'src/contexts';

type LayoutTypes = {
  children?: React.ReactElement | React.ReactElement[];
};

const Layout: React.FC<LayoutTypes> = ({ children }) => {
  const colorScheme = useColorScheme();
  const { bottomSheetControls } = useContext(AppContext);

  const { sheetIsOpen, sheetRef, snapPoints, handleSheetChanges } =
    bottomSheetControls;

  return (
    <SafeAreaView className='container flex-1 dark:bg-[#161618] light:bg-neutral-100'>
      <ScrollView className={`px-4 opacity-${sheetIsOpen ? '50' : '100'}`}>
        {children}
      </ScrollView>

      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose
        detached
        index={-1}
        // backgroundComponent={CustomBottomSheetBg}
        handleStyle={{
          backgroundColor: colorScheme === 'light' ? '#fff' : '#27272a',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
        handleIndicatorStyle={{
          backgroundColor: colorScheme === 'light' ? '#e4e4e7' : '#52525b',
        }}
        onChange={handleSheetChanges}
      >
        <BottomSheetView>
          <View className='bg-zinc-800 h-full w-full'>
            <Text className='dark:text-white'>Hello</Text>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default Layout;
