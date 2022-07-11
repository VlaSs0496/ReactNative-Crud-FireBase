import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { UsersList } from '../react-native-firebase/screens/UsersList'
import { CreateUserScreen } from '../react-native-firebase/screens/CreateUserScreen'
import { UserDetail } from '../react-native-firebase/screens/UserDetail'

const Stack = createNativeStackNavigator();


function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='CreateUserScreen' component = { CreateUserScreen } />
      <Stack.Screen name='UserList' component = { UsersList } />
      <Stack.Screen name='UserDetail' component = { UserDetail } />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
      <NavigationContainer>
        <MyStack/>
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
