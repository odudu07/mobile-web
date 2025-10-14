import { View, Text, StyleSheet } from 'react-native';

export default function Faq() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Perguntas Frequentes (FAQ)</Text>

      <View style={estilos.bloco}>
        <Text style={estilos.pergunta}>Como recuperar a senha?</Text>
      </View>

      <View style={estilos.bloco}>
        <Text style={estilos.pergunta}>Posso trocar uma camiseta caso não sirva? </Text>
      </View>

      <View style={estilos.bloco}>
        <Text style={estilos.pergunta}>Quais as opções de pagamento?  </Text>
      </View>

      <View style={estilos.bloco}>
        <Text style={estilos.pergunta}>Como cuidar das camisetas para preservar os detalhes?</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    padding: 15,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  bloco: {
    backgroundColor: '#d6d4d4ff',
    padding: 13,
    borderRadius: 15,
    marginBottom: 10,
  },
  pergunta: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
