import React, { createContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { GoalsType, RootStackParamList } from '../types';

import useHandleBottomSheet from 'src/hooks/useHandleBottomSheet';
export const AppContext = createContext<any>({
  bottomSheetControls: {
    sheetIsOpen: false,
    sheetRef: null,
    snapPoints: ['40%'],
    handleSnapPress: () => null,
    handlePresentModalPress: () => null,
    handleClose: () => null,
  },
});

export type AppContextTypes = {
  children: React.ReactElement | React.ReactElement[];
};

export const AppContextProvider: React.FC<AppContextTypes> = ({ children }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const {
    sheetIsOpen,
    sheetRef,
    handlePresentModalPress,
    snapPoints,
    handleSnapPress,
    handleClose,
  } = useHandleBottomSheet();

  return (
    <AppContext.Provider
      value={{
        navigation,
        bottomSheetControls: {
          sheetIsOpen,
          sheetRef,
          snapPoints,
          handleSnapPress,
          handlePresentModalPress,
          handleClose,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const GoalsContext = createContext({
  goals: [] as GoalsType[],
});
