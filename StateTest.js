import React,{ Component} from 'react';
import {Text,StyleSheet,View,TextInput,ScrollView} from 'react-native';
import ImageLoad from './ImageLoad'
import FlatList from './FlatList'

class Blink extends Component{
	constructor(props){
		super(props);
		this.state={
            showText:true
		};
		setInterval(()=>{
			this.setState(
                previousState=>{
                 return {showText:!previousState.showText};
                });
		},1000);
	}

	render(){
		let display=this.state.showText ? this.props.text: 'nothing';
		return (
      <View style={styles.stateview}>
			<Text style={styles.statetext}>{display}</Text>
     <Text style={styles.statetext}>{display}</Text>
     <Text style={styles.statetext} >{display}</Text>
     <Text style={styles.statetext} >{display}</Text>
      </View>
			);
	}
}


export default class BinkApp extends Component{
  constructor(props){
    super(props);
    this.state={text:''};
  }
	render(){
		return(
      <ScrollView style={styles.scrollviewstyle}>
			<View style={styles.container}>
      <ImageLoad/>
			<Blink text='blink'/>
      <Text>
       {this.state.text.split(' ').map((word)=>word&&'**').join(' ')}
       </Text>
      <TextInput 
       style={styles.textinput}
       placeholder='please input your name...'
       onChangeText={(text)=>this.setState({text})}
       >
      </TextInput>
      <ImageLoad/>
      <ImageLoad/>
      <ImageLoad/>
      <ImageLoad/>
      <ImageLoad/>
      <ImageLoad/>
      <ImageLoad/>
      <FlatList/>
			</View>
      </ScrollView>
			);
	}
}

const styles = StyleSheet.create({
  scrollviewstyle:{
      margin:20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
  },
  stateview: {
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-end',
  },
  statetext:{
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
    color:'#333333',
  },
  textinput:{
    height:40,
    width:300,
    color:'#333333'
  },
});
