import { useState, useRef, useCallback, useMemo } from 'react';
import BottomSheet, { BottomSheetModal } from '@gorhom/bottom-sheet';

const useHandleBottomSheet = (
  specificSheetRef?: React.RefObject<BottomSheet | BottomSheetModal>
) => {
  const sheetRef = specificSheetRef?.current
    ? specificSheetRef
    : useRef<BottomSheet>(null);
  const [sheetIsOpen, setSheetIsOpen] = useState<boolean>(false);

  const snapPoints = useMemo(() => ['40%', '60%', '90%'], []);

  const handleSnapPress = useCallback(
    (index: number) => {
      sheetRef?.current?.snapToIndex(index);
      if (!sheetIsOpen) setSheetIsOpen(true);
    },
    [sheetIsOpen]
  );

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    sheetRef.current?.expand();
  }, []);

  const handleSheetChanges = useCallback(
    (index: number, callbackFn?: () => void) => {
      // console.log('handleSheetChanges', index);

      if (index === -1 && callbackFn) {
        return callbackFn();
      }
    },
    []
  );

  const handleClose = useCallback(() => {
    sheetRef.current?.close();
    if (sheetIsOpen) setSheetIsOpen(false);
  }, []);

  return {
    sheetIsOpen,
    sheetRef,
    snapPoints,
    handleSnapPress,
    handlePresentModalPress,
    handleClose,
    handleSheetChanges,
  };
};

export default useHandleBottomSheet;
