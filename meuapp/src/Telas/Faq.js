import { useEffect, useState } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import axios from 'axios'

export default function Faq() {
  const [faq, setFaq] = useState([]);

  const listaFaq = () => {
    axios
      .get("http://10.0.2.2:3000/faq")
      .then((res) => {
        setFaq(res.data)
      })
      .catch((error) => {
        console.error("Erro ao buscar", error);
      });
  }

  useEffect(() => {
    listaFaq()
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Perguntas Frequentes</Text>
      {faq.length > 0 ? (
        faq.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.question}>Q: {item.pergunta}</Text>
            <Text style={styles.answer}>A: {item.resposta}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.noData}>Nenhum FAQ disponível.</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f6fc', // fundo azul clarinho suave
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 18,
    color: '#1a1a1a', // texto escuro e legível
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff', // card branco para contraste
    borderRadius: 12,
    padding: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#cce4f6', // leve contorno azul
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2, // sombra leve no Android
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e88e5', // azul destacado para pergunta
    marginBottom: 6,
  },
  answer: {
    fontSize: 15,
    color: '#222', // cinza escuro para resposta
    lineHeight: 22,
  },
  noData: {
    fontSize: 16,
    color: '#777', // cinza suave
    textAlign: 'center',
    marginTop: 40,
  },
});
