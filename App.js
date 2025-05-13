import React, { Component } from 'react';
import { View, Text, Button, TextInput, Modal, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { globalStyles } from './src/components/styles';

const Formulario = ({ alcool, gasolina, setAlcool, setGasolina, calcular }) => (
  <View style={globalStyles.formContainer}>
    <TextInput
      style={globalStyles.input}
      placeholder="Preço do Álcool"
      keyboardType="numeric"
      value={alcool}
      onChangeText={setAlcool}
    />
    <TextInput
      style={globalStyles.input}
      placeholder="Preço da Gasolina"
      keyboardType="numeric"
      value={gasolina}
      onChangeText={setGasolina}
    />
    <Button title="Calcular" onPress={calcular} color="#FF00FF" />
  </View>
);


const ModalRecomendacao = ({ visible, recomendacao, mensagem, onClose }) => (
  <Modal transparent={true} visible={visible} animationType="fade" onRequestClose={onClose}>
    <View style={globalStyles.modalContainer}>
      <View style={globalStyles.modalContent}>
        <Text style={globalStyles.modalText}>{recomendacao}</Text>
        <Text style={globalStyles.modalText}>{mensagem}</Text>
        <Button title="Fechar" onPress={onClose} color="#FFFF00" />
      </View>
    </View>
  </Modal>
);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      visibleModal: false,
      alcool: '',
      gasolina: '',
      recomendacao: '',
      mensagem: '',
      showCalculator: false,
    };
  }

  componentDidMount() {

    this.loadData();
  }


  saveData = async () => {
    try {
      await AsyncStorage.setItem('alcool', this.state.alcool);
      await AsyncStorage.setItem('gasolina', this.state.gasolina);
    } catch (e) {
      console.log(e);
    }
  };


  loadData = async () => {
    try {
      const storedAlcool = await AsyncStorage.getItem('alcool');
      const storedGasolina = await AsyncStorage.getItem('gasolina');
      if (storedAlcool !== null && storedGasolina !== null) {
        this.setState({
          alcool: storedAlcool,
          gasolina: storedGasolina,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };


  entrar = () => {
    this.setState({ showCalculator: true });
  };


  voltar = () => {
    this.setState({
      showCalculator: false,
      alcool: '',
      gasolina: '',
      recomendacao: '',
      mensagem: '',
      visibleModal: false,
    });
  };

  calcular = () => {
    const { alcool, gasolina } = this.state;

    if (parseFloat(gasolina) === 0) {
      alert('O preço da gasolina não pode ser zero.');
      return;
    }
    const resultado = parseFloat(alcool) / parseFloat(gasolina);
    console.log('Resultado da razão álcool/gasolina:', resultado);

    let recomendacao = '';
    let mensagem = '';


    if (resultado < 0.7) {
      recomendacao = 'Abasteça com Álcool';
      mensagem = 'O álcool é mais vantajoso economicamente neste caso devido à sua relação custo-benefício em relação à gasolina.';
    } else {
      recomendacao = 'Abasteça com Gasolina';
      mensagem = 'A gasolina oferece maior eficiência em relação ao preço neste cenário.';
    }

    console.log('Recomendação:', recomendacao); // Depuração da recomendação

    this.setState({ recomendacao, mensagem, visibleModal: true });

    // Salvar dados no AsyncStorage
    this.saveData();
  };


  render() {
    const { alcool, gasolina, visibleModal, recomendacao, mensagem, showCalculator } = this.state;

    return (
      <View style={globalStyles.container}>
        {!showCalculator ? (
          <>
            {/* Primeira tela com "Entrar" */}
            <Text style={globalStyles.title}>Calculadora de Combustível</Text>
            <Icon name="tint" size={60} color="#00FFCC" style={globalStyles.icon} />
            <Button title="Entrar" onPress={this.entrar} color="#FF00FF" />
          </>
        ) : (
          <>
            <Formulario
              alcool={alcool}
              gasolina={gasolina}
              setAlcool={(text) => this.setState({ alcool: text })}
              setGasolina={(text) => this.setState({ gasolina: text })}
              calcular={this.calcular}
            />
            <Button title="Voltar" onPress={this.voltar} color="#FF5733" />
          </>
        )}

        {/* Modal de recomendação */}
        <ModalRecomendacao
          visible={visibleModal}
          recomendacao={recomendacao}
          mensagem={mensagem}
          onClose={this.voltar}
        />
      </View>
    );
  }
}
