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
    binarioADecimal
    
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
        <ButtonCalc texto="Limpiar" ancho color="#9B9B9B" accion={limpiar} />
        
        <ButtonCalc texto="Borrar" ancho color="#9B9B9B" accion={btnDelete} />
        
       
      </div>

   

      <div className="fila">
        <ButtonCalc texto="0"  accion={armarNumero} />
        <ButtonCalc texto="1" accion={armarNumero} />
        <ButtonCalc texto="Covertir" ancho color="#604CC3" accion={binarioADecimal} />
      </div>
    </div>
  );
};
