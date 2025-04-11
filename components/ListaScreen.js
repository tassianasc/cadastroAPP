import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function ListaScreen({ navigation, alunos, setAlunos }) {
  const [editandoId, setEditandoId] = useState(null);
  const [nomeEditado, setNomeEditado] = useState('');
  const [idadeEditada, setIdadeEditada] = useState('');
  const [matriculaEditada, setMatriculaEditada] = useState('');

  const handleExcluir = (id) => {
    const novaLista = alunos.filter((aluno) => aluno.id !== id);
    setAlunos(novaLista);
  };

  const iniciarEdicao = (aluno) => {
    setEditandoId(aluno.id);
    setNomeEditado(aluno.nome);
    setIdadeEditada(aluno.idade);
    setMatriculaEditada(aluno.matricula);
  };

  const salvarEdicao = () => {
    const novaLista = alunos.map((aluno) =>
      aluno.id === editandoId
        ? {
            ...aluno,
            nome: nomeEditado,
            idade: idadeEditada,
            matricula: matriculaEditada,
          }
        : aluno
    );
    setAlunos(novaLista);
    setEditandoId(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Alunos Cadastrados</Text>

      {alunos.length === 0 ? (
        <Text style={{ textAlign: 'center' }}>Nenhum aluno cadastrado.</Text>
      ) : (
        <FlatList
          data={alunos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.aluno}>
              {editandoId === item.id ? (
                <>
                  <TextInput
                    style={styles.input}
                    value={nomeEditado}
                    onChangeText={setNomeEditado}
                  />
                  <TextInput
                    style={styles.input}
                    value={idadeEditada}
                    onChangeText={setIdadeEditada}
                    keyboardType="numeric"
                  />
                  <TextInput
                    style={styles.input}
                    value={matriculaEditada}
                    onChangeText={setMatriculaEditada}
                  />
                  <Button title="Salvar" onPress={salvarEdicao} />
                </>
              ) : (
                <>
                  <Text>Nome: {item.nome}</Text>
                  <Text>Idade: {item.idade}</Text>
                  <Text>Matrícula: {item.matricula}</Text>

                  <View style={styles.botoes}>
                    <TouchableOpacity
                      style={styles.botaoEditar}
                      onPress={() => iniciarEdicao(item)}
                    >
                      <Text style={styles.textoBotao}>Editar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.botaoExcluir}
                      onPress={() => handleExcluir(item.id)}
                    >
                      <Text style={styles.textoBotao}>Excluir</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </View>
          )}
        />
      )}

      <View style={{ marginTop: 20 }} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fefefe',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  aluno: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  botaoEditar: {
    backgroundColor: '#3498db',
    padding: 8,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
  },
  botaoExcluir: {
    backgroundColor: '#e74c3c',
    padding: 8,
    borderRadius: 5,
    flex: 1,
    marginLeft: 5,
  },
  textoBotao: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 8,
    marginBottom: 6,
  },
});
