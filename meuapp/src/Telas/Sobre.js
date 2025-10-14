import React from 'react'
import { View, Text, StyleSheet, Image } from "react-native";
import Image1 from '../../assets/img-1.jpg';
import Image2 from '../../assets/img-2.jpg';


export default function Sobre() {
    const info = {
        nomeApp: "Fut Popeto",
        versao: "1.0.0",
        desenvolvedor: "Eduardo",
    };


    return (
        <View style={estilos.container}>
            <Text>Sobre</Text>
            <Image source={Image1} style={estilos.image} />
            <View style={estilos.line} />
            <Image source={Image2} style={estilos.image} />
            <View style={estilos.line} />
            <Text style={estilos.titulo}>Sobre o app</Text>
            <Text style={estilos.corpo}>Nome: {info.nomeApp}</Text>
            <Text style={estilos.corpo}>Versão: {info.versao}</Text>
            <Text style={estilos.corpo}>Desenvolvedor: {info.desenvolvedor}</Text>
        </View >
    )
}

const estilos = StyleSheet.create({
    container: {
        padding: 20,
    },
    image: {
        borderRadius: 15,
        borderColor: "orange",
        borderWidth: 2,
    },
    line: {
        width: '90%',
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 10
    },
    titulo: {
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 5,
        textAlign: 'center',
    },
    corpo: {
        fontSize: 15,
        marginBottom: 2,
        color: '#000000ff',
        marginLeft: 5,
        letterSpacing: 0.5,
    }
}); 