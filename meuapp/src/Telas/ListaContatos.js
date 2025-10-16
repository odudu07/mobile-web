import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios';

export default function ListaContatos() {
    const [contatos, setConatatos] = useState([]);

    // Função para buscar conatatos do servidor
    const listaContatos = () => {
        axios
            .get("http://10.0.2.2:3000/contatos")
            .then((resposta) => {
                setConatatos(resposta.data)
            })
            .catch((error) => {
                console.error("Erro ao buscar contatos", error);
            });  
            
    }

    // Use o useEffect para buscar dados
    useEffect(() => {
        listaContatos();
    }, [])



    return (

        <View>
            <Text>Lista de Contatos</Text>
        </View>
    )
}