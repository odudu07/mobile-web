import { Text, View } from 'react-native'

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
        <View>
            <Text>Lista de Pessoas</Text>

            {pessoas.map((pessoa) => (
                <View>
                    <Text>{pessoa.nome}</Text>
                    <Text>{pessoa.idade}</Text>
                </View>
            ))}

        </View>     
    )
}