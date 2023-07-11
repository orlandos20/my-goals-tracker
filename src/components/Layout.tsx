import React from 'react';
import { SafeAreaView, View } from 'react-native';

type LayoutTypes = {
  children?: React.ReactElement | React.ReactElement[];
};

const Layout: React.FC<LayoutTypes> = ({ children }) => {
  return (
    <SafeAreaView className='flex-1 dark:bg-black-100'>
      <View className='flex-1 px-2'>{children}</View>
    </SafeAreaView>
  );
};

export default Layout;
