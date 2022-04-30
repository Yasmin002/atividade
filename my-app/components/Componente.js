import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default function Tabuada(props){
    let txt = [];
    let refri = 600;    
    let agua = 200;
    let bolo = 100;
    let salgadinho = 10;
    let doce = 3;

txt.push(
    <Text style = {styles.txt}>
        Quantidade de Alimentos {'\n'}{'\n'}
        Refrigerante: {(refri * parseFloat(props.num))/1000} L {'\n'}
        Água: {(agua * parseFloat(props.num))/1000} L {'\n'}
        Doces: {doce * parseFloat(props.num)} unidades {'\n'}
        Bolo: {(bolo * parseFloat(props.num))/1000} Kg {'\n'}
        Salgadinho: {salgadinho * parseFloat(props.num)} unidades {'\n'}
            </Text>
        );
    
    return(
        <>
            <View style = {styles.container}>
                {txt}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '30%',
        borderRadius: 15,  
        padding:15,
        backgroundColor: '#f2e4f2',
        borderColor: '#f0a0f2',
    },
    txt: {
        textAlign: "left",
        fontSize: 25,   
        marginLeft: '60px',
        fontWeight: 400,
    }
});