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
            />
        </View>
    )
} 