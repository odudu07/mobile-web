import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
  <>
    <View style={estilos.topo}>
      <Text style={estilos.Tituloheader}>Rodrigo Popeto</Text>
      
    </View>
    <View>
      <Text>Rodrigo Popeto</Text>
    <View/>
  </>
    
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100",
    height: 150,
    backgroundColor: "blue",
  },
  Tituloheader: {
    width: "100%",
    color: "white",
    textAlign: "center",
    paddingTop: 60,
    fontSize: 20,
  }

});
