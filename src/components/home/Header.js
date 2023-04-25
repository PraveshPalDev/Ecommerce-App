import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import scaling from '../../responsive/normalize';

export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.left_icon_container}>
        <Image
          source={require('../../assets/images/header-img/menu.png')}
          style={styles.left_image}
        />
      </TouchableOpacity>
      <View style={styles.left_icon_container}>
        <Text style={styles.heading}>Demo App</Text>
      </View>
      <TouchableOpacity style={styles.left_icon_container}>
        <Image
          source={require('../../assets/images/header-img/ringing.png')}
          style={styles.left_image}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: scaling.heightScale(40),
    backgroundColor: '#1e88e3',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left_icon_container: {
    justifyContent: 'center',
    marginHorizontal: scaling.normalize(5),
  },
  left_image: {
    width: scaling.normalize(40),
    height: scaling.normalize(40),
  },
  heading: {
    fontSize: scaling.normalize(20),
    color: '#000',
    fontFamily: 'Roboto-Bold',
  },
});
