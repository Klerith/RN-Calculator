
import { Pressable, Text, View } from 'react-native';
import { colors, styles } from '../theme/app-theme';


interface Props {
    label:string;
    color?: string;
    doubleSize?: boolean;
    blackText?: boolean;
    onPress: ( numeroTexto: string ) => void;
}

export const CalculatorButton = ({ 
  label, 
  color = colors.darkGray, 
  doubleSize = false, 
  blackText = false,
  onPress 
}: Props) => {
    return (
        <Pressable
            onPress={ () => onPress( label ) }
        >
            <View style={{ 
                ...styles.button ,
                backgroundColor: color,
                width: ( doubleSize ) ? 180 : 80
            }}>
                <Text style={{ 
                    ...styles.buttonText,
                    color: ( blackText ) ? 'black' : 'white'
                }}>{ label }</Text>
            </View>
        </Pressable>
    )
}
