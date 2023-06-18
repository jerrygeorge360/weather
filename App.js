// importing necessary modules
import React from "react";
import { StyleSheet,Text,View,KeyboardAvoidingView,ActivityIndicator } from "react-native";
import { ImageBackground } from "react-native";
import SearchInput from './components/SearchInput';
import image from './assests/stormy.jpg';
import image0 from './assests/default.jpg';
import image1 from './assests/rainy.jpg';
import image2 from './assests/sunny.jpg';
import {fetchWeather} from "./utils/api.js";

// created a class App to inherit the react.component 
export default class App extends React.Component{
// initialized the states, and props
    constructor(props){
            super(props)
            this.state={location:"",error:false,loading:false,temperature:0,weather:"",bgImage:"Default"}
    }



    componentDidMount(){


        // {require("./assests/{bgImage}")}
        
    }
// asynchronous function that changes states based on the ans I get.
    handleUpdateLocation=async city=>{
        if(!city) return;
        this.setState({loading:true}, async()=>{
            try {
                const {location,weather,temperature}= await fetchWeather(city);
                this.setState({location:location,weather:weather,temperature:temperature,error:false,loading:false})
                this.setState({bgImage:weather})
            } catch (e) {
                console.log("bad")
            }
            
        })

        
    }

    changeImage=()=>{
            
            let bgImg
            if(this.state.bgImage=="Default"){
                bgImg=image0;

            };

            if(this.state.bgImage=="Sunny"){
                bgImg=image2;

            };
            if(this.state.bgImage=="Stormy"){
                bgImg=image
            }
            if(this.state.bgImage=="Rainy"){
                bgImg=image1
            }
            return bgImg
    }
    render(){
        const {loading,error,location,weather,temperature}=this.state;
        return(
            <KeyboardAvoidingView style={styles.container}>

                <ImageBackground

                source={this.changeImage()}
                imageStyle={{resizeMode:"cover",width:null,height:null,flex:1}}
                style={{flex:1,}}
                >


                    <View style={styles.detailsContainer}>
                        <ActivityIndicator animating={loading} color="white" size="large"/>
                        <View>
                            {error?<Text style={[styles.smallText,styles.textStyle]}>
                                    Could not load weather,please try a different city.
                                </Text>:<View>
                                <Text style={[styles.textFormat,styles.textStyle]}>
                                    {location}
                                </Text>
                                <Text style={[styles.textFormat2, styles.textStyle]}>
                                    {weather}
                                </Text>
                                <Text style={[styles.textFormat3, styles.textStyle]}>
                                {`${Math.round(temperature)}°`}
                                </Text>
                                </View>}

                        <SearchInput text={location} onSubmit={this.handleUpdateLocation} placeholder="Search any city"/>
                    </View>
                </View>

                </ImageBackground>

            </KeyboardAvoidingView>


        )


    }

}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black",
    },
    detailsContainer:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"rgba(0,0,0,0.2)",
        paddingHorizontal:20,
    },
    textFormat:{
        fontWeight:"bold",
        fontSize:34,
        color:"white"
    },
    textFormat2:{
        fontSize:20,
        color:"white",

    },
    textFormat3:{
        fontSize:30,
        color:"white",

    }
})