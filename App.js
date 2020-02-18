import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, Image, TextInput, Text, Button, TouchableOpacity } from 'react-native';

export default function App() {
  
  const[guardaSol, setGuardaSol] = useState('');
  const[esteira, setEsteira] = useState('');
  
  function somatudo(){
    alert('O Valor é: R$' + ((guardaSol * 25) + (esteira * 20)));
  }

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#254cfa'/>
      
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./src/assets/guarda-sol.png')}/>
      
        <Text style={styles.titulo}>Beach Vendas</Text>
        
        <TextInput
          placeholder="Quantidade de guarda-sol"
          keyboardType={'numeric'}
          style={styles.campos}
          underlineColorAndroid={'transparent'}
          returnKeyType='next'
          value={guardaSol}
          onChangeText={setGuardaSol}
        />

        <TextInput
          placeholder="Quantidade de esteira"
          keyboardType={'numeric'}
          style={styles.campos}
          underlineColorAndroid={'transparent'}
          value={esteira}
          onChangeText={setEsteira}
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.75}
          onPress={somatudo}
        >
          <Text style={styles.textButton}>CALCULAR</Text>  
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#254cfa',
  },
  logo:{
    width: 80, 
    height: 80,
    marginTop: 25,
  },
  campos:{
    textAlign: 'center',  
    height: 50,
    width: '90%',  
    borderRadius: 10,  
    borderWidth: 2,  
    borderColor: '#009688',  
    marginBottom: 10,
    marginTop: 20,
    backgroundColor: 'white',
    fontSize: 16, 
  },
  titulo:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 25
  },
  button:{
    backgroundColor: '#009688',
    width: '90%',
    height: 45,
    borderRadius: 5,
    top: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton:{
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17,
  }
 
});
