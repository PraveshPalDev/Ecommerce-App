import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/home/Header';

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
