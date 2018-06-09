import React ,{ Component } from 'react';
import {Image,
     StyleSheet,
     Text,
	View
} from 'react-native';

export default class Bananas extends Component{
  render(){
  	let pic ={
  		 uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  		};
  	return (
  	<View style={styles.container}>
  	<Image source={pic} style={{width:250,height:180}}/>
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
  imagesstyle:{
    width:193,
    height:110,
  },
});