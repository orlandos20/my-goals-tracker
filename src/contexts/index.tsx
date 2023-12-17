import React, { createContext } from 'react';

import { useGoals } from 'src/hooks/goals';

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

export const GoalContext = createContext<ReturnType<typeof useGoals>>(
  {} as ReturnType<typeof useGoals>
);
