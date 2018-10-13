import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,TextInput, Button,Image} from 'react-native';
export default class login extends Component
{
render(){
    return(
        <View style={styles.main}>
        
        <Image style={styles.image1} source={require('../src/images/flag1.png')} />
        <TextInput placeholder={'Enter user name'} style={styles.username} ></TextInput>
        <TextInput placeholder={'Enter password '} style={styles.password} ></TextInput>
        
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('home')} >
        <Text>login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('signup')} >
        <Text>Register now</Text>
        </TouchableOpacity>
        
        </View>



);}

}
const styles =StyleSheet.create({
   image1:{
    width:100,
     height:100,

   },
    main:{flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'burlywood'
},
loginbtn:{
    backgroundColor:"#990000",

},

username: {
    backgroundColor:'antiquewhite',
    fontSize:12,
    borderRadius:15,
    marginTop:10,
    width:200,


},
password: {
    borderRadius:15,
    backgroundColor:'antiquewhite',
    fontSize:12,
    marginTop:10,
    width:200,


},
});