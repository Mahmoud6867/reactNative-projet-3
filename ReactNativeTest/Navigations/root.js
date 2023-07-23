import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from '../common/routes';
import Home from '../components/home';
import Users from '../components/users';
import PhoneBook from '../components/phoneBook';
import Details from '../components/details';
const stack = createNativeStackNavigator();
const Root = () => {
  return (

    <stack.Navigator>
        <stack.Screen name={routes.home} component={Home} options={{
            headerTitle: 'Home',
            headerStyle : {
                backgroundColor : 'lightblue'
            },
            headerTintColor: 'red',
            headerTitleAlign:'center',
            headerTitleStyle :{fontSize: 50}
        }} ></stack.Screen>
        <stack.Screen name={routes.users} component={Users}></stack.Screen>
        <stack.Screen name={routes.phoneBook} component={PhoneBook}></stack.Screen>
        <stack.Screen name={routes.details} component={Details}></stack.Screen>

    </stack.Navigator>
  )
}

export default Root

const styles = StyleSheet.create({})