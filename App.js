import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {useFonts} from 'expo-font'
const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'AC') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const renderButton = (value, style) => (
    <TouchableOpacity style={style} onPress={() => handlePress(value)}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );
  const [fontsLoaded] = useFonts({
    // 'Dbold': require('./assets/fonts/DancingScript-Bold.ttf'),
    // 'DMedium': require('../../assets/fonts/DancingScript-Medium.ttf'),
    // 'Dregular': require('../../assets/fonts/DancingScript-Regular.ttf'),
    // 'DSemibold': require('../../assets/fonts/DancingScript-SemiBold.ttf'),
    // 'semibold' : require('../../assets/fonts/Montserrat-SemiBold.ttf'),
    'Regular' : require('./assets/fonts/Montserrat-Regular.ttf'),
    'Bold' : require('./assets/fonts/Montserrat-Bold.ttf'),
    
  })

  return (
    
    <View style={styles.container}>
        <View style={styles.inputContainer}>
        <Text style={styles.input}>{input}</Text>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.result}>{result}</Text>
      </View>
    
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          {renderButton('AC', styles.resetButton)}
          {renderButton('/', styles.operatorButton)}
          {renderButton('*', styles.operatorButton)}
          {renderButton('-', styles.operatorButton)}
        </View>
        <View style={styles.row}>
          {renderButton('7', styles.button)}
          {renderButton('8', styles.button)}
          {renderButton('9', styles.button)}
          {renderButton('+', styles.operatorButton)}
        </View>
        <View style={styles.row}>
          {renderButton('4', styles.button)}
          {renderButton('5', styles.button)}
          {renderButton('6', styles.button)}
          {/* {renderButton('=', styles.resetButton)} */}
          {renderButton('%', styles.operatorButton)}
        </View>
        <View style={styles.row}>
          {renderButton('1', styles.button)}
          {renderButton('2', styles.button)}
          {renderButton('3', styles.button)}
          {/* {renderButton('%', styles.operatorButton)} */}
          {renderButton('=', styles.resetButton)}
        </View>
        <View style={styles.row}>
          {renderButton('0', styles.button1)}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },
  resultContainer: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    paddingBottom: 10,
    width: '100%',
    alignItems: 'flex-end',
  },
  result: {
    fontSize: 28,
    fontFamily:'Regular',
    color: '#fff',
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    paddingBottom: 10,
    width: '100%',
    alignItems: 'flex-end',
  },
  input: {
    fontSize: 52,
    // fontWeight: 'bold',
    color: '#fff',
    fontFamily:'Regular',
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#666666',
    borderRadius: 20,
  },
  button1: {
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#666666',
    borderRadius: 20,
    marginRight: '27%',
  },
  operatorButton: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    fontFamily:'Regular',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#999999',
    borderRadius: 20,
  },
  resetButton: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#ff6161',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontFamily:'Regular',
  },
});

export default Calculator;
