import React,{ Component} from 'react';
import {FlatList,StyleSheet,Text,View} from 'react-native';

var request_url='https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExamle.json';
export default class FlastListBasics extends Component{
	render(){
		return(
            <View  style={styles.container}>
             <FlatList
            data={[
            	{key:'Jack'},
            	{key:'Tom'},
            	{key:'Jonel'},
            	{key:'Julie'},
            	{key:'Jimmy'},
            	 {key:'Jackson'},
            	 {key:'Rose'},
            	 {key:'Wellline'},
            	]}
            	renderItem={Item=({item})=><Text style={styles.item}>{item.key}</Text>}
             >
             </FlatList>
           </View>
			);
	}
}


const styles=StyleSheet.create({
     container:{
     	flex:1,
     	paddingTop:22
     },
     item:{
     	padding:10,
     	fontSize:18,
     	height:44,
     }

})