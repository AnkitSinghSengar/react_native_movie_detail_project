import React from 'react';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screen
import ListScreen from '../screens/ListScreen/ListScreen';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen';

export type RootStackParamList = {
  ListScreen: undefined;
  DetailsScreen: undefined;
  DetailScreen: {id: any; rest: any};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListScreen">
        <Stack.Screen
          name="ListScreen"
          component={ListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
