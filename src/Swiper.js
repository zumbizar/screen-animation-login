import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable'

export default class SwiperScreen extends React.Component{
  constructor(props){
    super(props)
    this.state={
      animation_signup: null,
      animation_login: null,
      show: false
    }
  }

    onIndexChanged(index){
      if(index==2){
        this.setState({
          animation_signup: 'bounceInLeft',
          animation_login: 'bounceInRight',
          show: true

        })
      } else{
        this.setState({
          animation_signup: null,
          animation_login: null,
          show: false

        })
      }
    }

    render() {
        return (
            <Swiper
            loop={false}
            dot={<View style={styles.dot}/>}
            activeDot={<View style={styles.activeDot}/>}
            onIndexChanged={(index) => this.onIndexChanged(index)}
            >
              <View style={styles.silde}>
                <View style={styles.header}>
                  <Image 
                  source={require("./asset/asset1.png")} 
                  style={styles.image}
                  resizeMode={"contain"}
                  />
                </View>
                <View style={styles.footer}>
                  <Text style={styles.title}>Cloud Storage</Text>
                  <Text style={styles.text}>Thank you for storage on my Cloud!</Text>
                </View>
              </View>
              <View style={styles.silde}>
                <View style={styles.header}>
                  <Image 
                  source={require("./asset/asset2.png")} 
                  style={styles.image}
                  resizeMode={"contain"}
                  />
                </View>
                <View style={styles.footer}>
                  <Text style={styles.title}>Share Storage</Text>
                  <Text style={styles.text}>Thank you for storage on my Cloud!</Text>
                </View>
              </View>

              <View style={styles.silde}>
                <View style={styles.header}>
                  <Image 
                  source={require("./asset/asset3.png")} 
                  style={styles.image}
                  resizeMode={"contain"}
                  />
                </View>
                <View style={styles.footer}>
                  <Text style={styles.title}>Save Storage</Text>
                  <Text style={styles.text}>Thank you for storage on my Cloud!</Text>
                  {this.state.show ?
                    <View style={{flexDirection: 'row'}}>
                      <Animatable.View
                        animation={this.state.animation_signup}
                        delay={0}
                        duration={1500}
                        useNativeDriver>
                        <TouchableOpacity
                          onPress={()=> this.props.navigation.navigate("SignUpScreen")}
                          style={[styles.button,
                          {borderColor: '#3465d9',
                          borderWidth: 1,
                          borderRadius: 50,
                          marginTop:15}]}>

                          <Text style={{color: '#3465d9'}}>Sign Up</Text>

                        </TouchableOpacity>
                      </Animatable.View>
                      <Animatable.View
                        animation={this.state.animation_login}
                        delay={0}
                        duration={1500}
                        useNativeDriver>
                        <TouchableOpacity
                          onPress={()=> this.props.navigation.navigate("LoginScreen")}
                          style={[styles.button,{
                          backgroundColor: '#3465d9',
                          marginTop:15,
                          borderRadius: 50,
                          marginLeft: 20
                          }]}>

                          <Text style={{color: 'white'}}>Login</Text>
                          
                        </TouchableOpacity>
                      </Animatable.View>
                    </View>
                    :null} 
                </View>
              </View>
            </Swiper>
        );
    }
}

const {width, height} = Dimensions.get("screen")
const height_image = height * 0.5 * 0.8
const width_image = width * 0.7
const width_button = width * 0.3
const styles = StyleSheet.create({
  silde: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80
  },

  footer:{
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20
  },
  
  image:{
    height: height_image,
    width:  width_image,
  },

  title:{
    fontSize: 25,
    fontWeight: 'bold',
    color:  '#3465d9',
    textAlign: 'center',
    marginTop: 10
  },

  text: {
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 15,
  },

  dot:{
    backgroundColor: 'rgba(52,101,217,.4)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    marginVertical: 3
  },

  activeDot:{
    backgroundColor: '#3465d9',
    width: 20,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    marginVertical: 3 
  },

  button:{
    width: width_button,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }

});
