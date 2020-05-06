import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
}
from 'react-native';

import Logo from './Logo';

export default class LoginForm extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Logo />
                <TextInput 
                style={styles.inputBox}
                placeholder= "Email"
                placeholderTextColor = '#ffffff' />
            
            <TextInput 
                style={styles.inputBox}
                placeholder= "Password"
                placeholderTextColor = '#ffffff'
                secureTextEntry={true} />

            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            </View>
        )
    }
}


const styles = StyleSheet.create({

    container : {
      backgroundColor: '#2196f3',
      flex : 1,  
      alignItems:'center',
      justifyContent:'center'
    },

    inputBox:{
        width:300,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius : 25,
        paddingHorizontal : 16,
        fontSize : 16,
        marginVertical : 10

    },


    button : {
        
        width:300,
        backgroundColor: '#000000',
        borderRadius : 25,
        marginVertical:10,
        paddingVertical : 12

    },

    buttonText:{
        fontSize : 16,
        fontWeight : '500',
        color : '#ffffff',
        textAlign: 'center'        
    }
  });