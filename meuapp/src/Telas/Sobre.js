import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Image1 from "../../assets/img-1.jpg";
import Image2 from "../../assets/img-2.jpg";

export default function Sobre() {
  const info = {
    nomeApp: "Fut Popeto",
    versao: "1.0.0",
    desenvolvedor: "Pessoa Dev"
  };

  return (
    <ScrollView style={estilos.container}>
        <Text>Sobre</Text>
        <Image source={Image1} style={estilos.image} />
        <View style={estilos.line} />
        <Image source={Image2} style={estilos.image} />
        <View style={estilos.line} />
        <Text style={estilos.titulo}>Sobre o APP</Text>
        <Text>Nome: {info.nomeApp}</Text>
        <Text>Versão: {info.versao}</Text>
        <Text>Desenvolvido por: {info.desenvolvedor}</Text>
    </ScrollView>
  )
}

const estilos = StyleSheet.create({
  container: {
    padding: 20
  },
  image: {
    margin: 10,
    borderRadius: 12,
    borderColor: "orange",
    borderWidth: 2
  },
  line: {
    width: "90%",
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  }
})
