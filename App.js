import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import MainScreen from './src/screens/MainScreen';
import PhotoScreen from './src/screens/PhotoScreen';
import store from './src/store'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Gallery 🖼️' }} />
          <Stack.Screen name="Photo" component={PhotoScreen} options={{ title: 'Photo' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;