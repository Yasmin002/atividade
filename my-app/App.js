import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Componente from './components/Componente';

export default function App() {
  const [num, setNum]= useState(0);
  return (
 <View style={styles.container}>
    <View style={styles.row}>
        <Text style={styles.texto}>Número de convidados</Text>
        <TextInput style={styles.input}
          value={num} 
          onChangeText={(value) => setNum(value)} />  
        </View>
        <Componente num={num}/>
    </View>
  );
}
const styles = StyleSheet.create({

    container: {
    flex: 1,
    padding:15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  row:{
    width: '100%'
  },

  input:{   
    width: '30%',
    borderWidth: 2,
    marginLeft: '35%',
    marginTop: 50,
    marginBottom: 50,
    padding: 15,
    fontSize: 20,
    borderRadius: 10,
    backgroundColor: '#f2e4f2',
    borderColor: '#f0a0f2',
    textAlign: 'center',
  },
  
  texto: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#49114a',
  },
});