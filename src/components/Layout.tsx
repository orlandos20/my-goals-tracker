import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

type LayoutTypes = {
  children?: React.ReactElement | React.ReactElement[];
};

const Layout: React.FC<LayoutTypes> = ({ children }) => {
  return (
    <SafeAreaView className='container flex-1 dark:bg-black-100 light:bg-neutral-100'>
      <ScrollView className='px-4'>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default Layout;
