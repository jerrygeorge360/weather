

import React from "react";
import { StyleSheet,TextInput,View } from "react-native"
import PropTypes from "prop-types"
export default class SearchInput extends React.Component{

constructor(props){
super(props)
this.state={text:"",}

}
static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    };
static defaultProps = {
    placeholder:'',
    }
componentDidMount(){



}

handleChangeText=(newLocation)=>{
        this.setState({text:newLocation})
}
handleSubmitEditing=()=>{
    const {onSubmit}=this.props;
    const {text}=this.state;
    if(!text) return;
    onSubmit(text);
    this.setState({text:''})
}



render(){

    return(


        <View style={styles.container}>
        <TextInput autoCorrect={false}
          value={this.state.text}
          placeholder={this.props.placeholder}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          style={styles.textInput}
          clearButtonMode="always"
          onChangeText={this.handleChangeText}
          onSubmitEditing={this.handleSubmitEditing}
          />
        </View>






    )
}


}

// SearchInput.propTypes={
//     onsubmit:PropTypes.func.isRequired,
//     placeholder:PropTypes.string,
// }
// SearchInput.defaultProps={
//     placeholder:'',
// }
const styles=StyleSheet.create({
    container:{
        height:40,
        width:200,
        marginTop:20,
        backgroundColor:'#666',
        paddingHorizontal:10,
        borderRadius:5,
    },
    
        textInput:{
            flex:1,
            color:"white",
        
        
          }
    
    })