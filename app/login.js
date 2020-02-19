import React from 'react'; 
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

class Login extends Component {
state = {
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
  
}
