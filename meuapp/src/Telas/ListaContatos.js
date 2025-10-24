import { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function ListaContatos() {
  const [contatos, setContatos] = useState([]);
  const navigation = useNavigation();

  const listaContatos = () => {
    axios
      .get("http://10.0.2.2:3000/contatos")
      .then(resposta => setContatos(resposta.data))
      .catch(error => console.error("Erro ao buscar contatos:", error));
  };

  const deleteContato = (id) => {
    axios
      .delete(`http://10.0.2.2:3000/contatos/${id}`)
      .then(() => {
        setContatos(contatos.filter(c => c.id !== id));
        Alert.alert("Sucesso", "Contato excluído!");
      })
      .catch(() => Alert.alert("Erro ao excluir contato"));
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', listaContatos);
    return unsubscribe;
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {contatos.length > 0 ? (
        contatos.map((contato, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.nome}>{contato.nome}</Text>
            <Text style={styles.info}>Telefone: {contato.telefone}</Text>
            <Text style={styles.info}>Email: {contato.email}</Text>
            <Text style={styles.info}>Endereço: {contato.endereco}</Text>
            <Text style={styles.info}>CPF: {contato.cpf}</Text>

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, styles.deleteButton]}
                onPress={() => deleteContato(contato.id)}
              >
                <Text style={styles.buttonText}>Excluir</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.editButton]}
                onPress={() => navigation.navigate("Cadastro", { contato })}
              >
                <Text style={styles.buttonText}>Alterar</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.emptyText}>Nenhum contato disponível</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f2f6fc',
    paddingBottom: 30,
  },
  card: {
    backgroundColor: '#fff',
    padding: 18,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  nome: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
    marginBottom: 6,
  },
  info: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    gap: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#E53935',
  },
  editButton: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 30,
  },
});
