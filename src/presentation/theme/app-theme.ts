import { StyleSheet } from 'react-native';

export const colors = {
  darkGray: '#2D2D2D',
  lightGray: '#9B9B9B',
  orange: '#FF9427',
  
  textPrimary: 'white',
  textSecondary: '#666666',
  background: '#000000',
}



export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.background, // black
    },
    calculatorContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },
    mainResult: {
        color: colors.textPrimary, // 'white',
        fontSize: 70,
        textAlign: 'right',
        marginBottom: 10,
        fontWeight: '300'
    },
    subResult: {
        color: colors.textSecondary, // white
        fontSize: 40,
        textAlign: 'right',
        fontWeight: '300'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },
    button: {
        height: 80,
        width: 80,
        backgroundColor: colors.darkGray,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300'
    }

});