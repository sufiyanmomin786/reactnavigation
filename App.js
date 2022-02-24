import React, { Component } from 'react'; //import react in our code.



import { createAppContainer } from 'react-navigation'; //Import react-navigation
import { createStackNavigator } from 'react-navigation-stack';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';   //import all the screens we are going to switch 
import ThirdPage from './pages/ThirdPage';



import { LogBox } from 'react-native';
//import HomeScreen from './pages/HomeScreen';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);


const App = createStackNavigator({ //Constant which holds all the screens like index of any book 

  RegisterUser: { screen: FirstPage },  //First entry by default be our first screen if we do not define initialRouteName 
  ActivateUser: { screen: SecondPage },
  MuqtadiProfile: { screen: ThirdPage },
},
);

//   {

//     initialRoute
//       : 'Register User',
//   }
// );
export default createAppContainer(App);