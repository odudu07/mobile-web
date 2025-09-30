import { View, StyleSheet, Text } from "react-native";

export default function Prime() {
  return (
    <>
      <View style={estilos.topo}>
        <Text style={estilos.tituloHeader}>Cursos SENAI</Text>
      </View>

      <View style={estilos.cursosContent}>
        <Text style={estilos.textTitle}> - HTML Completo</Text>
        <Text> - Informática Básica teste</Text>
      </View>
    </>
  )
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: 150,
    backgroundColor: "red",
  },
  tituloHeader: {
    width: "100%",
    color: "white",
    textAlign: "center",
    paddingTop: 60,
    fontSize: 20
  },
  cursosContent: {
    paddingTop: 25,
  },
  textTitle: {
     color: "blue",
  }
});
