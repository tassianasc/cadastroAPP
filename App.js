import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroScreen from './components/CadastroScreen';
import ListaScreen from './components/ListaScreen';

const Stack = createStackNavigator();

export default function App() {
  const [alunos, setAlunos] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cadastro">
        <Stack.Screen name="Cadastro">
          {(props) => (
            <CadastroScreen {...props} alunos={alunos} setAlunos={setAlunos} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Lista">
          {(props) => (
            <ListaScreen {...props} alunos={alunos} setAlunos={setAlunos} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
