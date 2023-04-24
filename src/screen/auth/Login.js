import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('DrawerStack');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Login screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
