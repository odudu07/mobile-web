import React, { useState } from 'react'
import { Button, Text, TextInput, View, StyleSheet, Alert } from 'react-native'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const navigation = useNavigation();

 const enviarContato = async () => {
    if (!nome || !telefone) {
      Alert.alert("Erro, Por favor, preencha todos os campos!");
      return;
    }
    
    const novoContato = { nome, telefone };

    axios.post('http://10.0.2.2:3000/contatos', novoContato)
      .then(resposta => {
        if (resposta.status === 201) {
          setNome('');
          setTelefone('');
          navigation.navigate("ListaContatos");
        } else {
          Alert.alert("Erro, falha ao adicionar contato.");
        }
      });
  }


  return (
    <View style={estilos.container}>
      <Text style={estilos.label}>Nome:</Text>
      <TextInput
        style={estilos.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome"
      />

      <Text style={estilos.label}>Telefone:</Text>
      <TextInput 
        style={estilos.input}
        value={telefone}
        onChangeText={setTelefone}
        placeholder="Digite o telefone"
      />

      <Button title="Cadastrar" onPress={enviarContato} />
    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f6fc", // fundo suave azul clarinho
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "#1a1a1a", // texto mais escuro e legível
  },
  input: {
    borderWidth: 1,
    borderColor: "#cbd5e1", // cinza suave
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 16,
    borderRadius: 8,
    fontSize: 16,
    color: "#222",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1, // sombra leve para Android
  },
});
