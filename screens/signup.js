import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity, TextInput, Button} from 'react-native';
export default class signup extends Component
{
render(){
    return(
        <View style={styles.main}>
        <Text  >Registration page</Text>
        <TextInput placeholder={'full name'}></TextInput>
        <TextInput placeholder={'cell no name'}></TextInput>
        <TextInput placeholder={'address name'}></TextInput>
        <Button title='signup' ></Button>
        {/* <TouchableOpacity onPress={()=> this.props.navigation.navigate('home')} style={Styles.opacity_login}>
        <Text>click login</Text>
        </TouchableOpacity> */}
        
        </View>



);}

}
const styles =StyleSheet.create({

    main:{flex:1,
        justifyContent:'center',
    alignItems: 'center',
backgroundColor:'red',}
})