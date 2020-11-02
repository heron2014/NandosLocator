import React, { FC } from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { colors } from '../styles';

export interface IContainer {
  children: React.ReactNode | React.ReactNode[];
}

const Container: FC<IContainer> = ({ children }) => (
  <SafeAreaView style={styles.container}>{children}</SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLACK,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default Container;
