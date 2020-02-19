//import stuff
import React from 'react'; 
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import { Asset} from 'expo-asset';
import {AppLoading} from 'expo';
import {MusicApp} from './app/index'

//cache image
cacheImage = (images) => {
  return images.map(image => {
    if(typeof image == 'string')  {
      return Image.prefetch(image)
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  })
}


//create stuff
class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      isReady:false
    }
  }
  async _loadAssetsAsync() {
    const imageAssets = cacheImages([require('./assets/bg.jpg')]);

    await Promise.all([...imageAssets]);
  }
  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return <MusicApp></MusicApp>
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
//export stuff
export default App; 








/*state = {
  text: '',
  todo: ['']
}
onAdd = () => {
  var newTodo= this.state.text;
  var arr= this.state.todo;
  arr.push(newTodo);
  this.setState({todo:arr, text: ""});
}
deleteTodo = (t) => {
  var arr = this.state.todo;
  var pos = arr.indexOf(t); 
  arr.splice(pos,1);
  this.setState({todo:arr});
}
  
renderToDo= () => {
  return this.state.todo.map(t=> {
    return (
      <Text key={t}
      onPress={() => this.deleteTodo(t)}
      > {t +'\n'} </Text>
    )
  })
} 
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.header}> My Todo List </Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text)=>this.setState({text})}
          value={this.state.text}
        />
        <Button 
          color='#6200EA'
          title="Add Todo"
          onPress= {this.onAdd}
        />
        <Text>{this.renderToDo()}</Text>
      </View>
    )
  }
}
const styles = { 
  viewStyle: {
    marginTop: 50,
    alignItems:'center',
     justifyContent:'center', 
     margin: 10
    },
  inputStyle: {
    height: 40,
    width: 350,
    borderColor:'#6200EA', 
    borderWidth: 1
  },
  header: {
    fontSize: 30, 
    color: '#6200EA', 
    fontWeight: 'bold'
  }
  
}*/