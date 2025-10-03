import { Text, View, StyleSheet } from 'react-native'

export default function ListaPessoas() {
    const pessoas = [
        {
            id: 1,
            nome: 'Juliana',
            idade: 20,
        },
        {
            id: 2,
            nome: 'Caio',
            idade: 40,
        }, 
        {
            id: 3,
            nome: 'Eduardo',
            idade: 18,
        },
        {
            id: 4,
            nome: 'Luana',
            idade: 16,
        }

    ];
    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Lista de Pessoas</Text>

            {pessoas.map((pessoa) => (
                <View style={estilos.card}>
                    <Text>{pessoa.nome}</Text>
                    <Text>{pessoa.idade}</Text>
                </View>
            ))}

        </View>     
    )
}

const estilos = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 20,
    },
    titulo: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center"
    },
    card: {
        backgroundColor: "#ffffffff",
        padding: 15,
        borderRadius: 10,
        borderColor: "blue",
        borderWidth: 1,
        marginBottom: 10
    }
})