import { Text, View } from 'react-native';
import { colors, styles } from './theme/app-theme';
import { CalculatorButton } from './components/CalculatorButton';
import { useCalculator } from './hooks/useCalculadora';


const { darkGray, orange, lightGray } = colors;


export const CalculatorScreen = () => {

  const { 
    number, prevNumber, formula, buildNumber, clean, deleteOperation,
    addOperation, multiplyOperation, divideOperation, subtractOperation,
    calculateResult, toggleSign, 

  } = useCalculator();

  return (
    <View style={ styles.calculatorContainer }>

      <View style={ { paddingHorizontal: 30, paddingBottom: 20 } }>
        <Text
          style={ styles.mainResult }
          adjustsFontSizeToFit
          numberOfLines={ 1 }
        >{ formula }</Text>
        <Text 
          adjustsFontSizeToFit
          numberOfLines={ 1 }
          style={ styles.subResult }>{ ( prevNumber === '0' ) ? ' ' : prevNumber }</Text>

      </View>



    
      <View style={ styles.row }>

        {/* <Pressable style={ styles.button }>
          <Text style={ styles.buttonText }>1</Text>
        </Pressable> */}

        <CalculatorButton blackText label="C" color={ lightGray } onPress={ clean } />
        <CalculatorButton blackText label="+/-" color={ lightGray } onPress={ toggleSign } />
        <CalculatorButton blackText label="del" color={ lightGray } onPress={ deleteOperation } />
        <CalculatorButton label="/" color={ orange } onPress={ divideOperation } />

      </View>

      <View style={ styles.row }>

        <CalculatorButton label="7" onPress={ () => buildNumber( '7' ) } />
        <CalculatorButton label="8" onPress={ () => buildNumber( '8' ) } />
        <CalculatorButton label="9" onPress={ () => buildNumber( '9' ) } />
        <CalculatorButton label="x" color={ orange } onPress={ multiplyOperation } />

      </View>

      <View style={ styles.row }>

        <CalculatorButton label="4" onPress={ () => buildNumber( '4' ) } />
        <CalculatorButton label="5" onPress={ () => buildNumber( '5' ) } />
        <CalculatorButton label="6" onPress={ () => buildNumber( '6' ) } />
        <CalculatorButton label="-" color={ orange } onPress={ subtractOperation } />

      </View>

      <View style={ styles.row }>

        <CalculatorButton label="1" onPress={ () => buildNumber( '1' ) } />
        <CalculatorButton label="2" onPress={ () => buildNumber( '2' ) } />
        <CalculatorButton label="3" onPress={ () => buildNumber( '3' ) } />
        <CalculatorButton label="+" color={ orange } onPress={ addOperation } />

      </View>

      <View style={ styles.row }>

        <CalculatorButton doubleSize label="0" onPress={ () => buildNumber( '0' ) } />
        <CalculatorButton label="." onPress={ () => buildNumber('.') } />
        <CalculatorButton label="=" color={ orange } onPress={ calculateResult } />

      </View>




    </View>
  );
};