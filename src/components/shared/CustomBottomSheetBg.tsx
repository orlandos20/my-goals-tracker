import React, { useMemo } from 'react';
import { BottomSheetBackgroundProps } from '@gorhom/bottom-sheet';
import Animated, {
  useAnimatedStyle,
  interpolateColor,
} from 'react-native-reanimated';

const CustomBottomSheetBg: React.FC<BottomSheetBackgroundProps> = ({
  style,
  animatedIndex,
}) => {
  //#region styles
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    // @ts-ignore
    backgroundColor: interpolateColor(
      animatedIndex.value,
      [0, 1],
      ['#fff', 'blue']
    ),
  }));
  const containerStyle = useMemo(
    () => [
      style,
      containerAnimatedStyle,
      { borderTopLeftRadius: 15, borderTopRightRadius: 15 },
    ],
    [style, containerAnimatedStyle]
  );
  //#endregion
  // render
  return <Animated.View pointerEvents='none' style={containerStyle} />;
};

export default CustomBottomSheetBg;
