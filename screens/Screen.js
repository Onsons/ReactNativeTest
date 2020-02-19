import  React from 'react';
import {View, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {FontAwesome5 } from '@expo/vector-icons';

export default class Screen extends React.Component {
    render() { 
        return (
            <View style={styles.container}>
                <SafeAreaView style={{flex:1}}>
                    <TouchableOpacity style= {{ alignItems: "flex-end", margin: 16 }}
                     onPress={this.props.navigation.openDrawer}>
                        <FontAwesome5 name="bars" size={24} color="#161924">

                        </FontAwesome5>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "#FFF"
    }, 
    text: {
        color: "#161924",
        fontWeight: "500",
        fontSize: 20
    }

})