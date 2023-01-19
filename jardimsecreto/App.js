// In App.js in a new project
import { AdicionarPlanta } from './pages/AddPlanta';
import { HomeScreen } from './pages/HomeScreen';
import { Dicas } from './pages/Dicas';
import { MinhasPlantas } from './pages/MinhasPlantas';
import { VisualizarPlanta } from './pages/VisualizarPlanta';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { firebaseConfig } from './Firebase/firebase';
import * as firebase from 'firebase'

try {
  firebase.initializeApp(firebaseConfig);
} catch (e) {
  console.log('App em carregamento');
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Adicionar Planta" component={AdicionarPlanta} />
        <Stack.Screen name="Minhas Plantas" component={MinhasPlantas} />
        <Stack.Screen name="Dicas" component={Dicas} />
        <Stack.Screen name="Visualizar Planta" component={VisualizarPlanta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




export default App;