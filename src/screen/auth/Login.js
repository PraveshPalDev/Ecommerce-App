import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login() {
  return (
    <SafeAreaView>
      <Icon.Button name="facebook" backgroundColor="#3b5998">
        <Text style={{fontFamily: 'Roboto-Black', fontSize: 20}}>Login</Text>
      </Icon.Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
