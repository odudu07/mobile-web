import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Image1 from "../../assets/img-1.jpg";
import Image2 from "../../assets/img-2.jpg";

export default function Sobre() {
  const info = {
    nomeApp: "Fut Popeto",
    versao: "1.0.0",
    desenvolvedor: "Eduardo"
  };

  return (
    <ScrollView style={estilos.container}>
        <Text>Sobre</Text>
        <Image source={Image1} style={estilos.image} />
        <View style={estilos.line} />
        <Image source={Image2} style={estilos.image} />
        <View style={estilos.line} />
        <Text style={estilos.titulo}>Sobre o APP</Text>
        <Text style={estilos.texto}>Nome: {info.nomeApp}</Text>
        <Text style={estilos.texto}>Versão: {info.versao}</Text>
        <Text style={estilos.texto}>Desenvolvido por: {info.desenvolvedor}</Text>
    </ScrollView>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f6fc", // fundo suave azul clarinho
  },
  image: {
    width: "100%", // ocupa toda a largura disponível
    height: 180,
    marginVertical: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#1e88e5", // azul suave e elegante
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // sombra leve para Android
  },
  line: {
    width: "90%",
    height: 1.5,
    backgroundColor: "#cbd5e1", // cinza suave
    marginVertical: 10,
    alignSelf: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
    color: "#1a1a1a",
  },
  texto: { 
    fontSize: 17,
    color: "#222",
    marginBottom: 8,
    lineHeight: 22,
  },
});


