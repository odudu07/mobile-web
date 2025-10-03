import { Text, View, FlatList , StyleSheet } from "react-native";

export default function ListaAlunos() {
    const alunos = ["Davi", "Nicolas", "B2", "Rodrigo", "Eduardo"];
    
    return (
        <View>
            <Text style={estilos.titulo}>Lista de Alunos</Text>
            <FlatList
                      data={alunos}
                      renderItem={({ item }) => (
                        <View style={estilos.lastItem}>
                          <Text style={estilos.bullet}>° </Text>
                          <Text style={estilos.text}>{item}</Text>
                        </View>
                        
                      )}
                    />
                </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 20,
    },
    lastItem: {
      flexDirection: "greenrow",
      allignItens: "center",
      marginBottom: 10,
      padding: 5,
      backgroundColor: "#e7d7d3ff",
      borderWidth: 1,
      borderColor: "blue",
      borderRadius: 7,
      elevation: 2,
    },
    bullet: {
      fontSize: 20,
      marginRight: 8,
    }, 
    text: {
      fontSize: 16,
    },
    titulo: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center"
    }
})

