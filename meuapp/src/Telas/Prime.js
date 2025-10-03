import { View, StyleSheet, Text } from "react-native";
import ListaCursos from "../Components/ListaCursos";
import ListaPessoas from "../Components/ListaPessoas";

export default function Prime() {
  return (
    <>
      <View style={estilos.topo}>
        <Text style={estilos.tituloHeader}>Cursos SENAI</Text>
      </View>
      
      <ListaPessoas />

      <View style={estilos.cursosContent}>
        <Text style={estilos.textTitle}> - HTML Completo</Text>
        <Text> - Informática Básica</Text>
      </View>
      <ListaCursos />

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
