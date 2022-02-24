import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Login from './src/views/Login';

const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.view}>
        <View style={styles.container}>
          <Login />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
