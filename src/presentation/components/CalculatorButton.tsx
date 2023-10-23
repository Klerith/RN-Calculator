
import { Pressable, Text, View } from 'react-native';
import { colors, styles } from '../theme/app-theme';


interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
  blackText?: boolean;
  onPress: ( numeroTexto: string ) => void;
}

export const CalculatorButton = ( {
  label,
  color = colors.darkGray,
  doubleSize = false,
  blackText = false,
  onPress
}: Props ) => {
  return (
    <Pressable
      onPress={ () => onPress( label ) }
      style={ ( { pressed } ) => ( {
        ...styles.button,
        backgroundColor: color,
        width: ( doubleSize ) ? 180 : 80,
        opacity: ( pressed ) ? 0.8 : 1,
      } )
      }
    >

      <Text style={ {
        ...styles.buttonText,
        color: ( blackText ) ? 'black' : 'white'
      } }>{ label }</Text>

    </Pressable>
  );
};
