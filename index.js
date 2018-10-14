/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyBETr7uRGiSSN9iJfo6bNphceEzcbYEoPg",
    authDomain: "charkononline.firebaseapp.com",
    databaseURL: "https://charkononline.firebaseio.com",
    projectId: "charkononline",
    storageBucket: "charkononline.appspot.com",
    messagingSenderId: "973690432366"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp({});
  }

AppRegistry.registerComponent(appName, () => App);
