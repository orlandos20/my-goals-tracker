import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

const WelcomeMessage = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16, color: colors.text }}>Welcome Orlando</Text>
      <Text style={[{ color: colors.text }, { ...styles.subTitle }]}>
        Create your life goal from long term
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '70%',
    alignItems: 'center',
    marginTop: 50,
  },
  subTitle: {
    paddingHorizontal: 5,
    textAlign: 'center',
    fontSize: 32,
  },
});

export default WelcomeMessage;
