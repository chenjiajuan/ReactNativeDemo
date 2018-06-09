import React,{ Component} from 'react';
import {FlatList,StyleSheet,Text,View} from 'react-native';

var request_url='https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExamle.json';

export default class FetchDataTest extends Component{
	constructor(props){
		super(props);
		this.state = {
			movies: null,
		};
	}
	render()
	{
		if (!this.state.movies) {
          return this.renderLoadingView();
		}
		var movie =this.state.movies[0];
		return this.renderMovie(movie);
	}

	fetchData(){
		fetch(request_url,{
			method:'GET'
		})
		.then((reponse)=>reponse.json())
		.then((reponseData)=>{
			this.setState({
				movies:reponseData.movies,
			});
		})
		.catch((error)=>{
			callback(error);
		});
	}
	componentDidMount(){
		this.fetchData();
	}

	renderLoadingView(){
		return (
            <View>
            <Text>
            正在加载电影数据.....
            </Text>
            </View>
			);
	}

	renderMovie(movie){
		return(
                 <Text >{movie.title}</Text>
                  <Text style=>{movie.year}</Text>

			);
	}


}