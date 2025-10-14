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
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 20,
        alignItems: 'center',
    },
    image: {
        width: '90%',
        height: 200,
        borderRadius: 15,
        borderColor: 'blue',
        borderWidth: 3,
        marginVertical: 10,

    },
    line: {
        width: '90%',
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 10
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000000ff',
        textAlign: 'center',
        marginBottom: 8,
        marginTop: 5,
    },

    corpo: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
        textAlign: 'left',
        width: '100%',
        lineHeight: 17,
        fontWeight: 'bold',
    },

}); 