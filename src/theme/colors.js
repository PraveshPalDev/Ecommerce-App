const darkColors = {
  background: '#1a1a1a',
  text: '#f0f0f0',
  primary: '#8f34eb',
  secondary: '#ebebeb',
};

const lightColors = {
  background: '#f0f0f0',
  text: '#1a1a1a',
  primary: '#8f34eb',
  secondary: '#1a1a1a',
};

export default {
  dark: darkColors,
  light: lightColors,
};

// demo to check the code in dark and light mode
// import React from 'react';
// import { View, Text, StyleSheet, useColorScheme } from 'react-native';
// import colors from './color';

// const App = () => {
//   const scheme = useColorScheme();
//   const theme = scheme === 'dark' ? colors.dark : colors.light;

//   return (
//     <View style={[styles.container, { backgroundColor: theme.background }]}>
//       <Text style={[styles.text, { color: theme.text }]}>Hello world!</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });

// export default App;
