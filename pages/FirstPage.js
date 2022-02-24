import React, { Component } from 'react'; //import react in our code. 

import { StyleSheet, View, Button, TextInput, Text } from 'react-native'; //import all the components we are going to use.




export default class FirstPage extends Component {
  static navigationOptions = {
    title: 'Register User',//Sets Header text of Status Bar

    headerStyle: {
      backgroundColor: '#f4511e', //Sets Header color

    },
    headerTintColor: '#fff', //Sets Header text color

    headerTitleStyle: {
      fontWeight: 'bold',  //Sets Header text style

    },
  };



  // state = {
  //   email: '', phone_number: ''
  // }
  // onChangeText = (key, val) => {
  //   this.setState({ [key]: val })
  // }
  // Register = async () => {
  //   const { email, phone_number } = this.state
  //   try {
  //     // here place your signup logic
  //     console.log('user successfully signed up!: ', success)
  //   } catch (err) {
  //     console.log('error signing up: ', err)
  //   }
  // }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Enter your Email Address to use For M-Radio'
          autoCapitalize="none"
          placeholderTextColor='#0B0301'
          onChangeText={val => this.onChangeText('email', val)}
        />

        <Text style={{
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 25
        }}>OR</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your Mobile Number to use for M-Radio'
          autoCapitalize="none"
          placeholderTextColor='red'
          onChangeText={val => this.onChangeText('phone_number', val)}
        />

        <Button title='Register'
          onPress={() => navigate('ActivateUser')}
        />
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 320,
    height: 50,
    backgroundColor: '#FCCEC3',
    margin: 5,
    padding: 12,
    //color: 'white',
    borderRadius: 10,
    fontSize: 13,
    //fontWeight: '500',
  },
});