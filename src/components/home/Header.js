import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import scaling from '../../responsive/normalize';

export default function Header({
  leftIcon,
  rightIcon,
  title,
  leftIconClick,
  rightIconClick,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.left_icon_container}
        onPress={() => {
          leftIconClick();
        }}>
        <Image source={leftIcon} style={styles.left_image} />
      </TouchableOpacity>
      <View style={styles.left_icon_container}>
        <Text style={styles.heading}>{title}</Text>
      </View>
      <TouchableOpacity
        style={styles.left_icon_container}
        onPress={() => {
          rightIconClick();
        }}>
        <Image source={rightIcon} style={styles.left_image} />
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
    width: scaling.normalize(35),
    height: scaling.normalize(35),
  },
  heading: {
    fontSize: scaling.normalize(25),
    color: '#fff',
    fontFamily: 'Roboto-Bold',
    fontStyle: 'italic',
  },
});
