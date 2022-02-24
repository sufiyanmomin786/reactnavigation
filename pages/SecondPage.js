import React, { Component } from 'react'; //import react in our code. 

import { StyleSheet, View, Text, Button, TextInput } from 'react-native';  //import all the components we are going to use.


export default class SecondPage extends Component {
    static navigationOptions = {
        title: 'Activate User', //Sets Header text of Status Bar
        headerStyle: {
            backgroundColor: '#f4511e', //Sets Header color

        },
        headerTintColor: '#fff', //Sets Header text color

        headerTitleStyle: {
            fontWeight: 'bold',  //Sets Header text style

        },

    };

    // state = {
    //     Code: ''
    // }
    // onChangeText = (key, val) => {
    //     this.setState({ [key]: val })
    // }
    // Register = async () => {
    //     const { Code, } = this.state
    //     try {
    //         // here place your signup logic
    //         console.log('user successfully signed up!: ', success)
    //     } catch (err) {
    //         console.log('error signing up: ', err)
    //     }
    // }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

                <TextInput
                    style={styles.input}
                    placeholder='Enter Activation Code'
                    autoCapitalize="none"
                    placeholderTextColor='#0B0301'
                    onChangeText={val => this.onChangeText('Code', val)}
                />


                <Button title='Activate'
                    onPress={() => navigate('MuqtadiProfile')}
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