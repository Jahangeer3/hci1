import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar
}
from 'react-native';

import LoginForm from './Components/LoginForm';


export default class Login extends Component{
  render(){
      return(
          <View style={styles.container}>
                   
              <LoginForm />
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
    }
  });

  
