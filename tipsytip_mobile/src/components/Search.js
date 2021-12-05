import React from 'react'
import {View, Button, TextInput, StyleSheet } from 'react-native'

class Search extends React.Component {
    

    constructor (props) {
        super(props)
        this.state= {
            city : 'Lyon',
            term : 'Restaurant'
        }
    }

    setCity (city) {
        this.setState({city})
    }
    setTerm (term) {
        this.setState({term})
    }
    search() {
        this.props.navigation.navigate('Search')
    }
    render() {
        return (
            <View style={{ backgroundColor:"#63b1aa" }}>
            <View style={{ margin: 12}}>
                
                <TextInput onChangeText={(text) => this.setTerm(text)}
                           style={{ color:'#0b2c4c', marginLeft: 5, marginRight: 5, marginBottom: 5, height:50, borderColor:'#fab345', backgroundColor:"#fbf9ec", borderWidth: 1, paddingLeft:5 }} 
                           value={this.state.term} 
                           placeholder="Type de Restaurant"/>
                <TextInput onChangeText={(text) => this.setCity(text)}
                           style={{ color:'#0b2c4c', marginLeft: 5, marginRight: 5, marginBottom: 5, height:50, borderColor:'#fab345', backgroundColor:"#fbf9ec", borderWidth: 1, paddingLeft:5 }} 
                           value={this.state.city} 
                           placeholder="Ville"/>
            </View>
            <View style={{ color:"#ee4760" }}>
                <Button color='#0b2c4c' title="Rechercher" onPress={() =>  this.submit()} />

            </View>
            </View>

        )
    }
}

export default Search