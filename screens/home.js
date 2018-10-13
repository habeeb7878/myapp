import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,Image,ImageBackground} from 'react-native';
export default class home extends Component
{
render(){
    return(
        <View style={styles.main}>
         
           <ImageBackground source={require('../src/images/gif1.gif')} style={styles.block1}>
           
           <Image style={styles.img} source={require('../src/images/personls.jpg')} ></Image>
           <TouchableOpacity onPress={()=> this.props.navigation.navigate('personals')} >
           <Text>----------------------------------</Text>
           <Text style={styles.txt1}>personals</Text>
           </TouchableOpacity>
           </ImageBackground>
           <View style={styles.block1}>
          
           <Image style={styles.img} source={require('../src/images/flag1.png')}></Image>
           <TouchableOpacity onPress={()=> this.props.navigation.navigate('Screen1')} >
           <Text>----------------------------------</Text>
           <Text style={styles.txt1}>Accademy</Text>
           </TouchableOpacity>
           </View>
           <View style={styles.block1}> 
           <Image style={styles.img} source={require('../src/images/maps.png')}></Image>
           <TouchableOpacity onPress={()=> this.props.navigation.navigate('home')} >
           <Text>----------------------------------</Text>
           <Text style={styles.txt1}>Maps</Text>
           
           </TouchableOpacity>
           </View>
           <View style={styles.block1}>
           <Image style={styles.img} source={require('../src/images/skills.png')}></Image>
           <TouchableOpacity onPress={()=> this.props.navigation.navigate('home')} >
           <Text>----------------------------------</Text>
           <Text style={styles.txt1}>Skills</Text>
           </TouchableOpacity>
           </View>
          

           
        </View>
        

        



);}

}
const styles =StyleSheet.create({

    main:{
        flex:1,
        flexDirection: 'row',
        backgroundColor:'white',
        flexWrap:'wrap',
    },
    txt1:{
  alignItems:'center',
  marginLeft:30,
  color:'white',

    },
    
    img:{
        width:100,
         height:100,
         borderRadius:50,
         marginTop:10,
    
       },
       img2:{
        width:181,
        height:100,
        borderRadius:8, 
        resizeMode:'cover',
    
       },
    block1:{
        //backgroundImage:URL('../src/images/gif1.gif'),
        
        backgroundColor:'orange',
        borderRadius:8,
        margin:5,
        alignItems:'center',
        width:181,
        height:200,
        borderColor:'white',

    },
})