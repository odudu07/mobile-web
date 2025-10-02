import { Text, View } from "react-native";

export default function ListaAlunos() {
    const alunos = ["Neymar", "Messi", "Yamal", "Pelé", "Eduardo"];
    
    return (
        <View>
            <Text>Lista de Alunos</Text>
            <FlatList
                      data={data}
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