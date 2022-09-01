import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PokeDetail from './src/Screen/PokeDetail';
import PokeHome from './src/Screen/PokeHome';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='PokeHome' component={PokeHome} options = {{
          title: "Home",
          headerStyle: {
            backgroundColor: "beige"
          }
        }}></Stack.Screen>
        <Stack.Screen name='PokeDetail' component={PokeDetail} options = {{
          title: "Pokemon's Details",
          headerStyle: {
            backgroundColor: "beige"
          }
        }}></Stack.Screen>
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
