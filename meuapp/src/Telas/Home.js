import React from 'react'
import { View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Card from '../Components/Card';

export default function Home() {
    const navigation = useNavigation();
    return (
        <View>
            <Card
                title="Sobre"
                content="Saiba mais sobre nós e nossos serviços."
                TextButton="Ir para sobre"
                onPress={
                    () => navigation.navigate('Sobre')}
            />
            <Card
                title="Faq"
                content="Saiba mais Faq."
                TextButton="Ir para Faq"
                onPress={
                    () => navigation.navigate('Faq')}
            />

            <Card
                title="Lista Contatos"
                content="Lista de contatos cadastrados."
                TextButton="Ir para Lista"
                onPress={
                    () => navigation.navigate('ListaContatos')}
            />
        </View>

    )
} 