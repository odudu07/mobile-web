import { useEffect, useState  } from 'react'
import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import axios from 'axios';

export default function ListaContatos() {
  const [contatos, setContatos] = useState([]);

  // Função para buscar contatos do servidor
  const listaContatos = () => {
    axios
      .get("http://10.0.2.2:3000/contatos")
      .then((resposta) => {
        setContatos(resposta.data)
      })
      .catch((error) => {
        console.error("Erro ao buscar contatos", error);
      });
  }

  // Função para excluir um contato
  const deleteContato = (id) => {
    axios
     .delete(`http://10.0.2.2:3000/contatos/${id}`)
     .then(() => {
      // Atualizar lista de contato
      setContatos(contatos.filter((contato) => contato.id !== id));
      Alert.alert("Sucesso", "Contato Exluido com sucesso");
     })
     .catch((error) => {
      console.log("Erro excluir contato", error);
      Alert.alert("Erro ao excluir");
     });
  }

  // Use o useEffect para buscar dados
  useEffect(() => {
    listaContatos()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Contatos</Text>

      <ScrollView contentContainerStyle={styles.listContainer}>
        {contatos.length > 0 ? (
          contatos.map((contato, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.nome}>{contato.nome}</Text>
              <Text style={styles.telefone}>{contato.telefone}</Text>
                <Button
                  title="Excluir"
                  onPress={() => deleteContato(contato.id)}
                />
            </View>
          ))
        ) : (
          <Text style={styles.emptyText}>Nenhum contato disponível</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f6fc', // azul clarinho suave
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1a1a1a',
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
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
    marginBottom: 4,
  },
  telefone: {
    fontSize: 16,
    color: '#555',
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 30,
  },
});
