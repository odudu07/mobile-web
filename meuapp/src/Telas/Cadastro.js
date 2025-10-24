import React, { useState, useEffect } from 'react';
import { Button, Text, TextInput, View, StyleSheet, Alert, ScrollView } from 'react-native';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Cadastro() {
  const navigation = useNavigation();
  const route = useRoute();
  const contatoExistente = route.params?.contato;

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cpf, setCpf] = useState('');

  useEffect(() => {
    if (contatoExistente) {
      setNome(contatoExistente.nome || '');
      setTelefone(contatoExistente.telefone || '');
      setEmail(contatoExistente.email || '');
      setEndereco(contatoExistente.endereco || '');
      setCpf(contatoExistente.cpf || '');
    }
  }, [contatoExistente]);

  const validarCampos = () => {
    if (!nome || !telefone || !email || !endereco || !cpf) {
      Alert.alert("Erro", "Todos os campos devem ser preenchidos!");
      return false;
    }

    // Verifica se telefone é só números
    if (!/^\d+$/.test(telefone)) {
      Alert.alert("Erro", "Telefone deve conter apenas números!");
      return false;
    }

    // Verifica se CPF é só números e 11 dígitos
    if (!/^\d{11}$/.test(cpf)) {
      Alert.alert("Erro", "CPF deve conter 11 números!");
      return false;
    }

    // Verifica se email é válido (contém @ e um domínio)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Erro", "Digite um email válido!");
      return false;
    }

    return true;
  }

  const enviarContato = async () => {
    if (!validarCampos()) return;

    const dadosContato = { nome, telefone, email, endereco, cpf };

    try {
      if (contatoExistente) {
        await axios.put(`http://10.0.2.2:3000/contatos/${contatoExistente.id}`, dadosContato);
        Alert.alert("Sucesso", "Contato atualizado!");
      } else {
        const resposta = await axios.post("http://10.0.2.2:3000/contatos", dadosContato);
        if (resposta.status === 201) {
          Alert.alert("Sucesso", "Contato cadastrado!");
        }
      }

      setNome('');
      setTelefone('');
      setEmail('');
      setEndereco('');
      setCpf('');
      navigation.navigate("ListaContatos");

    } catch (error) {
      console.error("Erro ao salvar contato:", error);
      Alert.alert("Erro", "Não foi possível salvar o contato.");
    }
  };

  return (
    <ScrollView contentContainerStyle={estilos.container}>
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
        keyboardType="phone-pad"
      />

      <Text style={estilos.label}>Email:</Text>
      <TextInput 
        style={estilos.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite o email"
        keyboardType="email-address"
      />

      <Text style={estilos.label}>Endereço:</Text>
      <TextInput 
        style={estilos.input}
        value={endereco}
        onChangeText={setEndereco}
        placeholder="Digite o endereço"
      />

      <Text style={estilos.label}>CPF:</Text>
      <TextInput 
        style={estilos.input}
        value={cpf}
        onChangeText={setCpf}
        placeholder="Digite o CPF"
        keyboardType="numeric"
      />

      <Button 
        title={contatoExistente ? "Salvar Alterações" : "Cadastrar"} 
        onPress={enviarContato} 
      />
    </ScrollView>
  )
}

const estilos = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f2f6fc",
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "#1a1a1a",
  },
  input: {
    borderWidth: 1,
    borderColor: "#cbd5e1",
    backgroundColor: "#fff",
  }
})