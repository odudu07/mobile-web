import { useEffect, useState  } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
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
    backgroundColor: '#f0f4f8',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  nome: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
  },
  telefone: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 4,
  },
  emptyText: {
    fontSize: 16,
    color: '#94a3b8',
    textAlign: 'center',
    marginTop: 40,
  },
});