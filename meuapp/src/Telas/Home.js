import React from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Card from "../Components/Card"

export default function Home() {
  const navigation = useNavigation();

  return (
    <View>
        <Card 
          title="Sobre"
          content="Saiba mais sobre nós e nossos serviços."
          textButton="Ir para Sobre "
          onPress={ () => navigation.navigate('Sobre') }
        />
        <Card
          title="Faq"
          content="Saiba mais Faq."
          textButton="Ir para Faq"
          onPress={ () => navigation.navigate('Faq') }
        />
        <Card
          title="Lista de Contatos"
          content="Lista de contatos cadastrados."
          textButton="Ir para Lista"
          onPress={ () => navigation.navigate('ListaContatos') }
        />
        <Card
          title="Cadastro"
          content="Cadastrar Lista."
          textButton="Cadastro"
          onPress={ () => navigation.navigate('Cadastro') }
        />
    </View>
  )
}
