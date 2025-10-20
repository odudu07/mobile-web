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
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#e3f2fd', // azul bem claro (você pode trocar)
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e88e5', // azul mais forte para a pergunta
    marginBottom: 5,
  },
  answer: {
    fontSize: 15,
    color: '#424242', // cinza escuro para resposta
    lineHeight: 20,
  },
  noData: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 40,
  },
});