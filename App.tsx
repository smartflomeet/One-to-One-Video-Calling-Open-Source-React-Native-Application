import * as React from 'react';
import EnxJoinScreen from './src/EnxJoinScreen';
import EnxConferenceScreen from './src/EnxConferenceScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="EnxJoinScreen" component={EnxJoinScreen} />
        <Stack.Screen name="EnxConferenceScreen" component={EnxConferenceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;