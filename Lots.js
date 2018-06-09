
import React,{ Component } from 'react';
import {
  Text,
  StyleSheet,
  View
   }  from 'react-native';

class Greeting extends Component{
  render(){
    return (
    <Text style={styles.welcome} >{this.props.name},age :{this.props.age}</Text>
      );
  }
}

export default class LoastTest extends Component{
   render(){
    return(
       <View style={styles.container}>
       <Greeting name='你好' age='25'/>
       <Greeting name='hello' age='35'/>
       </View> 
      );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'#fff000',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  imagesstyle:{
    width:193,
    height:110,
  },
});