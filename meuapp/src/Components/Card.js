import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native'

export default function Card(props) {

  return (
    <View style={estilos.container}>
        <Text style={estilos.cardTitle}>{props.title}</Text>
        <Text style={estilos.cardContent}>{props.content} </Text>
        <Button
            title={props.textButton}
            onPress={props.onPress}
        />
    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8, 
    shadowColor: "#000", 
    shadowOpacity: 0.1,
    shadowOffset:  2,
    shadowRadius: 3,
    elevation: 2,
    padding: 20,
    margin: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  cardContent: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },
});
