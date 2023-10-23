import { Text, View } from 'react-native';
import { colors, styles } from './theme/app-theme';
import { CalculatorButton } from './components/CalculatorButton';
import { useCalculator } from './hooks/useCalculadora';


const { darkGray, orange, lightGray } = colors;


export const CalculatorScreen = () => {

  const { number, prevNumber, buildNumber } = useCalculator();

  return (
    <View style={ styles.calculatorContainer }>

      <View style={ { paddingHorizontal: 30 } }>
        <Text style={ styles.subResult }>{ ( prevNumber === '0' ) ? '' : prevNumber }</Text>
        <Text
          style={ styles.mainResult }
          adjustsFontSizeToFit
          numberOfLines={ 1 }
        >{ number }</Text>

      </View>




      <View style={ styles.row }>

        {/* <Pressable style={ styles.button }>
          <Text style={ styles.buttonText }>1</Text>
        </Pressable> */}

        <CalculatorButton blackText label="C" color={ lightGray } onPress={ () => console.log( 'C' ) } />
        <CalculatorButton blackText label="+/-" color={ lightGray } onPress={ () => console.log( 'C' ) } />
        <CalculatorButton blackText label="del" color={ lightGray } onPress={ () => console.log( 'C' ) } />
        <CalculatorButton label="/" color={ orange } onPress={ () => console.log( 'C' ) } />

      </View>

      <View style={ styles.row }>

        <CalculatorButton label="7" onPress={ () => buildNumber( '7' ) } />
        <CalculatorButton label="8" onPress={ () => buildNumber( '8' ) } />
        <CalculatorButton label="9" onPress={ () => buildNumber( '9' ) } />
        <CalculatorButton label="x" color={ orange } onPress={ () => console.log( 'C' ) } />

      </View>

      <View style={ styles.row }>

        <CalculatorButton label="4" onPress={ () => buildNumber( '4' ) } />
        <CalculatorButton label="5" onPress={ () => buildNumber( '5' ) } />
        <CalculatorButton label="6" onPress={ () => buildNumber( '6' ) } />
        <CalculatorButton label="-" color={ orange } onPress={ () => console.log( 'C' ) } />

      </View>

      <View style={ styles.row }>

        <CalculatorButton label="1" onPress={ () => buildNumber( '1' ) } />
        <CalculatorButton label="2" onPress={ () => buildNumber( '2' ) } />
        <CalculatorButton label="3" onPress={ () => buildNumber( '3' ) } />
        <CalculatorButton label="+" color={ orange } onPress={ () => console.log( 'C' ) } />

      </View>

      <View style={ styles.row }>

        <CalculatorButton doubleSize label="0" onPress={ () => console.log( 'C' ) } />
        <CalculatorButton label="." onPress={ () => console.log( 'C' ) } />
        <CalculatorButton label="=" color={ orange } onPress={ () => console.log( 'C' ) } />

      </View>




    </View>
  );
};