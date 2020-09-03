import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LoginComponent from "./LoginComponent"
import SignUp from "./SignUp"
import Swiper from "./Swiper"

const StackNavigation = createStackNavigator({
    SwiperScreen:{
        screen: Swiper,
        navigationOptions:{
            headerShown: false
        }
    },
    LoginScreen:{
        screen: LoginComponent,
        navigationOptions:{
            headerShown: false
        }
    },
    SignUpScreen:{
        screen: SignUp,
        navigationOptions:{
            headerShown: false
        }
    },
})


export default createAppContainer(StackNavigation)