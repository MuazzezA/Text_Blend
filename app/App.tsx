/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import color from './utils/color';
import AppStack from './navigation/app-stack';
import {MainContextProvider} from './context/MainContext';

const App: React.FC = () => {
  return (
    <MainContextProvider>
      <SafeAreaView style={style.root}>
        <AppStack />
      </SafeAreaView>
    </MainContextProvider>
  );
};

export default App;
const style = StyleSheet.create({
  root: {flex: 1, backgroundColor: color.background},
});
