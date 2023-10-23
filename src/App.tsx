/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type {PropsWithChildren} from 'react';

import {
  StatusBar,
  View,

} from 'react-native';

import { CalculatorScreen } from './presentation/CalculatorScreen';
import { styles } from './presentation/theme/app-theme';


function App() {


  return (
    <View style={ styles.background } >
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={ 'black' }
      />
      
      <CalculatorScreen />
    </View>
    
  );
}


export default App;
