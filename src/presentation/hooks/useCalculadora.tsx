import { useRef, useState } from 'react';

enum Operators {
  add, subtract, multiply, divide
}

export const useCalculator = () => {

  const [ prevNumber, setPrevNumber ] = useState( '0' );
  const [ number, setNumber ] = useState( '0' );

  const lastOperation = useRef<Operators>();


  const clean = () => {
    setNumber( '0' );
    setPrevNumber( '0' );
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

    const num1 = Number( number );
    const num2 = Number( prevNumber );

    switch ( lastOperation.current ) {
      case Operators.add:
        setNumber( `${ num1 + num2 }` );
        break;

      case Operators.subtract:
        setNumber( `${ num2 - num1 }` );
        break;

      case Operators.multiply:
        setNumber( `${ num1 * num2 }` );
        break;

      case Operators.divide:
        setNumber( `${ num2 / num1 }` );
        break;

    }

    setPrevNumber( '0' );
  };


  return {
    number,
    prevNumber,

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
