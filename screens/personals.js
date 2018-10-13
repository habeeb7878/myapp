import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity, TextInput, Button,FlatList,} from 'react-native';
import flatlistdata from '../screens/flatlistdata';



export default class personals extends Component
{
render(){
    return(
        <View style={styles.main}>
         <FlatList
          data={flatlistdata}
          
          renderItem={({item, index}) =>  <FlatListItem  item={item} style={styles.item} index={index} ></FlatListItem>}
        />
        
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
 item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  img:{
    width:100,
     height:100,
     borderRadius:50,
     marginTop:10,

   }
})