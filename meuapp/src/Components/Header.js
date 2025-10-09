import React from 'react'
import { StyleSheet, Text , View } from "react-native"

export default function Header(){
    return(
        <>
        <View style={estilos.topo}>
           <Text style={estilos.tituloHeader}>Fut Popeto</Text>
        </View>
        </>
    )
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 120,
        backgroundColor: '#858585ff',
    },
    tituloHeader: {
        widith: "100%",
         textAlign: 'center',
        height: 120,
        color: '#ffffffff',
        fontWeight: 'bold',
        fontSize: 25,
        paddingTop: 40,

       
    },
});
