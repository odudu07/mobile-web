import { Text, View, FlatList , StyleSheet } from "react-native";

export default function ListaAlunos() {
    const alunos = ["Neymar", "Messi", "Yamal", "Pelé", "Eduardo"];
    
    return (
        <View>
            <Text>Lista de Alunos</Text>
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
      flexDirection: "row",
      allignItens: "center",
      marginBottom: 8,
      padding: 12,
      backgroundColor: "#e7d7d3ff",
      borderWidth: 1,
      borderColor: "gray",
      borderRadius: 10,
      elevation: 3,
    },
    bullet: {
      fontSize: 20,
      marginRight: 8,
    }, 
    text: {
      fontSize: 16,
    }
})

