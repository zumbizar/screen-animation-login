import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class Login extends React.Component{
    constructor(props){
      super(props)
      this.state={
        borderColor: null
      }
    }

    onFocus(value){
      this.setState({
        borderColor: value
      })
    }

    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.text}>Login with Email and Password</Text>
            <View style={styles.action}>

              <View style={[styles.section,{
                borderColor:this.state.borderColor=="Email" ?
                '#3465d9' : 'gray'
              }]}>
                <MaterialIcons name="email" size={20}
                color={this.state.borderColor=="Email" ? 
                '#3465d9' : 'gray'}/>
                <TextInput 
                placeholder="Email"
                style={[styles.TextInput,{
                  color:this.state.borderColor=="Email" ?
                  '#3465d9' : 'gray'
                }]}
                onFocus={()=>this.onFocus("Email")}/>
              </View>
            </View>

            <View style={[styles.section,{
              borderColor:this.state.borderColor=="password" ?
              '#3465d9' : 'gray'
            }]}>
                <MaterialIcons name="lock-outline" size={20}
                color={this.state.borderColor=="password" ? 
                '#3465d9' : 'gray'}/>
                <TextInput 
                placeholder="Password"
                style={[styles.TextInput,{
                  color:this.state.borderColor=="password" ?
                  '#3465d9' : 'gray'
                }]}
                secureTextEntry
                onFocus={()=>this.onFocus("password")}/>
              </View>
              <TouchableOpacity>
                <Text style={styles.forgot}>Forgot password?</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.login}>

                <Text style={styles.textLogin}>Login</Text>
      
              </TouchableOpacity>
              <View style={styles.signup}>

                <Text style={[styles.textSignUp,
                {color:'gray'}]}>Don't have an account?</Text>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate("SignUpScreen")}>

                  <Text style={[styles.textSignUp,
                    {color: '#3465d9', marginLeft: 3
                  }]}>Sign Up</Text>

                </TouchableOpacity>
              </View>
          </View>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 100
  },

  title: {
    color: '#3465d9',
    fontWeight: 'bold',
    fontSize: 30
  },

  text:{
    color: 'gray',
  },

  section:{
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10
  },

  TextInput:{
    flex: 1,
    paddingLeft: 10
  },

  forgot: {
    textAlign: 'right',
    marginTop: 15,
    color: '#3465d9'
  },

  textLogin: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold'
  },

  login:{
    width: '100%',
    height: 40,
    backgroundColor: '#3465d9',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    borderRadius: 50
  },

  signup:{
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center'
  },

  textSignUp:{
    textAlign: 'center'
  }
});
