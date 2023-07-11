import React from 'react';
import { SafeAreaView, View } from 'react-native';

type LayoutTypes = {
  children?: React.ReactElement | React.ReactElement[];
};

const Layout: React.FC<LayoutTypes> = ({ children }) => {
  return (
    <SafeAreaView className='container dark:bg-black-100'>
      <View className='px-4'>{children}</View>
    </SafeAreaView>
  );
};

export default Layout;
