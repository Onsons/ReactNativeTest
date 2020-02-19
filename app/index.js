import React, { Component } from 'react';
import {  View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import  Animated from 'react-native-reanimated';
import {TapGestureHandler} from 'react-native-gesture-handler'
const { width, height } = Dimensions.get('window');
const {Value,event, block,cond,eq,set} = Animated
class MusicApp extends Component {
    constructor(){
        super();
        this.buttonOpacity = new Value(1);
        this.onStataChange = event([
            {
                nativeEvent: ({state}) => block([
                    cond(eq(stat, State.END), set(this.buttonOpacity,0))
                ])
            }
        ])
    }
    render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'flex-end'
        }}
      >
        <View style={{ ...StyleSheet.absoluteFill }}>
          <Image
            source={require('../assets/bg.jpg')}
            style={{ flex: 1, height: null, width: null }}
          />
        </View>
        <View style={{ height: height / 3, justifyContent: 'center' }}>
    
         <TapGestureHandler onHandlerStateChange={this.onStataChange}>
          <Animated.View style={{...styles.button, opacity : this.buttonOpacity}}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>SIGN IN</Text>
             </Animated.View >
          </TapGestureHandler>
          <View style={{ ...styles.button, backgroundColor: '#2E71DC' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
              SIGN IN WITH FACEBOOK
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
      backgroundColor: 'white',
      height: 70,
      marginHorizontal: 20,
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 5
    }
  });
export default MusicApp;

