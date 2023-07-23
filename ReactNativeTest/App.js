import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Root from './Navigations/root';
import UserContextProvider from './contexts/UserContextProvider';

export default function App() {
  return (

  <UserContextProvider>

    <NavigationContainer>  

          <Root></Root>

    </NavigationContainer>

  </UserContextProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
