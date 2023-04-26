import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/home/Header';

export default function Home({navigation}) {
  const leftIconHandler = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header
        title={'Kart Market'}
        leftIcon={require('../../assets/images/header-img/menu.png')}
        rightIcon={require('../../assets/images/header-img/ringing.png')}
        leftIconClick={() => leftIconHandler()}
        rightIconClick={() => alert('right icon click')}
      />

      {/* Main design page */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
