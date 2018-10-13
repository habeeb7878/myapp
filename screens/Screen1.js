import React, { Component } from 'react';
import { StyleSheet, View,Image } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/FontAwesome';
const myicon = ( <Icon name="home" size={30} color="white" />)

 
export default class Screen1 extends Component {
  static navigationOptions={
  tabBarLabel:'Home',
  tabBarIcon:()=>(
      //   <Image source={require=('../src/images/icon1.png')} style={styles.img} >
      //  </Image>
      myicon
      
    
    
  )


  }
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
      tableData: [
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '456\n789'],
        ['a', 'b', 'c', 'd']
      ]
    };
  }
 
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text} />
        </Table>
       
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  img: {width:10, height:10, tintColor:'white'}
});