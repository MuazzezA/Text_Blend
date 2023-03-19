import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens';
import color from '../utils/color';

const Stack = createNativeStackNavigator();

const AppStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home-screen"
        screenOptions={{
          headerShown: false,
          contentStyle: {backgroundColor: color.background},
        }}>
        <Stack.Screen name="home-screen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppStack;
