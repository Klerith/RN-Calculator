import { useEffect, useRef, useState } from 'react';

enum Operators {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '÷',
}

export const useCalculator = () => {

  const [ formula, setFormula ] = useState( '' );
  const [ prevNumber, setPrevNumber ] = useState( '0' );
  const [ number, setNumber ] = useState( '0' );

  const lastOperation = useRef<Operators>();

  useEffect( () => {
    if ( lastOperation.current ) {
      const firstFormulaPart = formula.split( ' ' )[ 0 ];
      setFormula( `${ firstFormulaPart } ${ lastOperation.current } ${ number }` );
    } else {
      setFormula( number );
    }

  }, [ number ] );


  useEffect(() => {
    const subResult = calculateSubResult();
    setPrevNumber(subResult.toString());
  }, [formula])
  



  const clean = () => {
    setNumber( '0' );
    setPrevNumber( '0' );
    lastOperation.current = undefined;
    setFormula( '0' );
  };

  const buildNumber = ( numberString: string ) => {

    // No aceptar doble punto
    if ( number.includes( '.' ) && numberString === '.' ) return;

    if ( number.startsWith( '0' ) || number.startsWith( '-0' ) ) {

      // Punto decimal
      if ( numberString === '.' ) {
        return setNumber( number + numberString );
      }

      // Evaluar si es otro cero, y hay un punto
      if ( numberString === '0' && number.includes( '.' ) ) {
        return setNumber( number + numberString );
      }

      // Evaluar si es diferente de cero y no tiene un punto
      if ( numberString !== '0' && !number.includes( '.' ) ) {
        return setNumber( numberString );
      }

      // Evitar 0000.0
      if ( numberString === '0' && !number.includes( '.' ) ) {
        return; //todo revisar setNumber( number );
      }

      return setNumber( number + numberString );
    }

    setNumber( number + numberString );

  };

  const toggleSign = () => {
    if ( number.includes( '-' ) ) {
      return setNumber( number.replace( '-', '' ) );
    }

    setNumber( '-' + number );

  };

  const setLastNumber = () => {
    if ( number.endsWith( '.' ) ) {
      setPrevNumber( number.slice( 0, -1 ) );
    } else {
      setPrevNumber( number );
    }
    setNumber( '0' );
  };

  const deleteOperation = () => {

    let negative = '';
    let temporalNumber = number;

    if ( number.includes( '-' ) ) {
      negative = '-';
      temporalNumber = number.substring( 1 );
    }

    if ( temporalNumber.length > 1 ) {
      return setNumber( negative + temporalNumber.slice( 0, -1 ) );
    }

    setNumber( '0' );

  };




  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operators.divide;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operators.multiply;
  };

  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operators.subtract;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operators.add;
  };

  const calculateResult = () => {
    const result = calculateSubResult();
    setFormula(result.toString());

    lastOperation.current = undefined;
    setPrevNumber( '0' );
  };


  const calculateSubResult = ():number => {

    const [ firstValue, operation, secondValue ] = formula.split( ' ' );

    const num1 = Number( firstValue );
    const num2 = Number( secondValue );

    if ( isNaN( num2 ) ) return num1;

    switch ( operation ) {
      case Operators.add:
        return num1 + num2 ;

      case Operators.subtract:
        return num1 - num2 ;

      case Operators.multiply:
        return num1 * num2 ;

      case Operators.divide:
        return num1 / num2 ;

      default: 
        throw new Error( 'Operation not found ' + lastOperation.current );
    }
    
  };


  return {
    number,
    prevNumber,
    formula,

    divideOperation,
    clean,
    toggleSign,
    deleteOperation,
    buildNumber,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  };

};
