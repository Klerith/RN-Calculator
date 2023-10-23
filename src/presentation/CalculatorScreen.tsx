import { Text, View } from 'react-native';
import { colors, styles } from './theme/app-theme';
import { CalculatorButton } from './components/CalculatorButton';


const { darkGray, orange, lightGray } = colors;


export const CalculatorScreen = () => {
  return (
    <View style={ styles.calculatorContainer }>

      <View style={{ paddingHorizontal: 30}}>
        <Text style={ styles.subResult }>1,500.00</Text>
        <Text style={ styles.mainResult }>1,500.00</Text>

      </View>

      


      <View style={ styles.row }>

        {/* <Pressable style={ styles.button }>
          <Text style={ styles.buttonText }>1</Text>
        </Pressable> */}

        <CalculatorButton blackText label="C" color={ lightGray } onPress={ () => console.log('C') } />
        <CalculatorButton blackText label="+/-" color={ lightGray } onPress={ () => console.log('C') } />
        <CalculatorButton blackText label="del" color={ lightGray } onPress={ () => console.log('C') } />
        <CalculatorButton label="/" color={ orange } onPress={ () => console.log('C') } />
    
      </View>

      <View style={ styles.row }>

        <CalculatorButton label="7" onPress={ () => console.log('C') } />
        <CalculatorButton label="8" onPress={ () => console.log('C') } />
        <CalculatorButton label="9" onPress={ () => console.log('C') } />
        <CalculatorButton label="x" color={ orange } onPress={ () => console.log('C') } />
    
      </View>

      <View style={ styles.row }>

        <CalculatorButton label="4" onPress={ () => console.log('C') } />
        <CalculatorButton label="5" onPress={ () => console.log('C') } />
        <CalculatorButton label="6" onPress={ () => console.log('C') } />
        <CalculatorButton label="-" color={ orange } onPress={ () => console.log('C') } />
    
      </View>

      <View style={ styles.row }>

        <CalculatorButton label="1" onPress={ () => console.log('C') } />
        <CalculatorButton label="2" onPress={ () => console.log('C') } />
        <CalculatorButton label="3" onPress={ () => console.log('C') } />
        <CalculatorButton label="+" color={ orange } onPress={ () => console.log('C') } />
    
      </View>

      <View style={ styles.row }>

        <CalculatorButton doubleSize label="0" onPress={ () => console.log('C') } />
        <CalculatorButton label="." onPress={ () => console.log('C') } />
        <CalculatorButton label="=" color={ orange } onPress={ () => console.log('C') } />
    
      </View>




    </View>
  )
}