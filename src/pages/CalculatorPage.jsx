import React from 'react';


import ButtonCalc from '../components/CalculatorButton';
import { useCalculadora } from '../hooks/useCalc';
import '../styles.css'

export const CalculatorPage = () => {
  const {
    number,
    numeroAnterior,
    limpiar,
    armarNumero,
    btnDelete,
    binarioADecimal,
    isResult
    
  } = useCalculadora();

  return (
    <div className="calculadoraContainer">
      {numeroAnterior !== '0' && (
        <div className="resultadoPequeno">{numeroAnterior}</div>
      )}

      <div className="resultado">
        {number}
      </div>

      <div className="fila">
        <ButtonCalc texto="Limpiar" ancho color={isResult ? 'green' : '#9B9B9B'} accion={limpiar} />
        
        <ButtonCalc texto="Borrar" ancho color={isResult ? 'rgba(211, 211, 211, 0.6)' : '#9B9B9B'} accion={btnDelete} isResult={isResult} />
        
       
      </div>

   

      <div className="fila">
        <ButtonCalc texto="0"  accion={armarNumero}  ancho color={isResult ? 'rgba(211, 211, 211, 0.6)' : '#2D2D2D'} isResult={isResult} />
        <ButtonCalc texto="1" accion={armarNumero} ancho color={isResult ? 'rgba(211, 211, 211, 0.6)' : '#2D2D2D'} isResult={isResult} />
        <ButtonCalc texto="Covertir" ancho color={isResult ? 'rgba(211, 211, 211, 0.6)' : '#604CC3'} accion={binarioADecimal} isResult={isResult} />
      </div>
    </div>
  );
};
