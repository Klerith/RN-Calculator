import { Text, View } from 'react-native';
import { colors, styles } from './theme/app-theme';
import { CalculatorButton } from './components/CalculatorButton';


const { darkGray, orange, lightGray } = colors;


export const CalculatorScreen = () => {
  return (
    <View style={ styles.calculatorContainer }>

      <Text style={ styles.subResult }>1,500.00</Text>
      <Text style={ styles.mainResult }>1,500.00</Text>
      


      <View style={ styles.row }>

        {/* <Pressable style={ styles.button }>
          <Text style={ styles.buttonText }>1</Text>
        </Pressable> */}

        <CalculatorButton blackText label="C" color={ lightGray } onPress={ () => console.log('C') } />
        <CalculatorButton blackText label="+/-" color={ lightGray } onPress={ () => console.log('C') } />
        <CalculatorButton blackText label="del" color={ lightGray } onPress={ () => console.log('C') } />
        <CalculatorButton label="/" color={ orange } onPress={ () => console.log('C') } />
    

      </View>


    </View>
  )
}