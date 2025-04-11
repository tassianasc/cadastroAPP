import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CadastroScreen({ navigation, alunos, setAlunos }) {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [matricula, setMatricula] = useState('');

  const handleCadastrar = () => {
    if (nome.trim() === '' || idade.trim() === '' || matricula.trim() === '') {
      alert('Preencha todos os campos!');
      return;
    }

    const novoAluno = {
      id: Date.now().toString(),
      nome,
      idade,
      matricula,
    };

    setAlunos([...alunos, novoAluno]);
    setNome('');
    setIdade('');
    setMatricula('');
    alert('Aluno cadastrado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Alunos</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Idade"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
      />

      <TextInput
        style={styles.input}
        placeholder="Matrícula"
        keyboardType="numeric"
        value={matricula}
        onChangeText={setMatricula}
      />

      <Button title="Cadastrar" onPress={handleCadastrar} />

      <View style={{ marginTop: 10 }} />
      <Button
        title="Visualizar Cadastros"
        onPress={() => navigation.navigate('Lista')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ecf0f1',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 10,
    marginBottom: 12,
  },
});
