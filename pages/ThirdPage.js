import React, { Component } from 'react'; //import react in our code. 

import { StyleSheet, View, Text, Button, TextInput } from 'react-native'; //import all the components we are going to use.


export default class ThirdPage extends Component {
    static navigationOptions = {
        title: 'Muqtadi Profile', //Sets Header text of Status Bar
        headerStyle: {
            backgroundColor: '#f4511e', //Sets Header color

        },
        headerTintColor: '#fff', //Sets Header text color

        headerTitleStyle: {
            fontWeight: 'bold',  //Sets Header text style

        },
    };

    // state = {
    //     username: '', password: '', email: '', phone_number: ''
    // }
    // onChangeText = (key, val) => {
    //     this.setState({ [key]: val })
    // }
    // signUp = async () => {
    //     const { username, password, email, phone_number } = this.state
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
                    placeholder='Registration No'
                    autoCapitalize="none"
                    placeholderTextColor='red'
                    onChangeText={val => this.onChangeText('username', val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Name'
                    autoCapitalize="none"
                    placeholderTextColor='red'
                    onChangeText={val => this.onChangeText('username', val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Email Id'
                    autoCapitalize="none"
                    placeholderTextColor='#0B0301'
                    onChangeText={val => this.onChangeText('email', val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Phone Number'
                    autoCapitalize="none"
                    placeholderTextColor='red'
                    onChangeText={val => this.onChangeText('phone_number', val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Address1'
                    autoCapitalize="none"
                    placeholderTextColor='#0B0301'
                    onChangeText={val => this.onChangeText('password', val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Address2'
                    autoCapitalize="none"
                    placeholderTextColor='#0B0301'
                    onChangeText={val => this.onChangeText('password', val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='City'
                    autoCapitalize="none"
                    placeholderTextColor='red'
                    onChangeText={val => this.onChangeText('password', val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='PinCode'
                    autoCapitalize="none"
                    placeholderTextColor='red'
                    onChangeText={val => this.onChangeText('password', val
                    )}
                />

                <Button title='Complete Profile'
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
        fontSize: 15,
        //fontWeight: '500',
    },
});