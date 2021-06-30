import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { AuthProvider } from './src/context/AuthContext';
import { MainApp } from './src/main/MainApp';



const App = () => {  

  
  return (

    <NavigationContainer>
      <AppProvider>
        <MainApp />
      </AppProvider>
    </NavigationContainer>
  );
}

const AppProvider = ({children}: any) => {
    return(
      <AuthProvider>
        {children}
      </AuthProvider>
    )
}


export default App;
