import { StyleSheet, Text, ScrollView } from 'react-native';
import Prime from './src/Telas/prime';
import ListaAlunos from './src/Components/ListaAlunos';

export default function App() {
  return (
    <>
      <ScrollView>
        <Prime/>
        <ListaAlunos/>
      </ScrollView>
    </>

  );
}


 