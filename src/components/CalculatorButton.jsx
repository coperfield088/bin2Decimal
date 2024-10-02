import React from 'react';

const ButtonCalc = ({ texto, color = '#2D2D2D', ancho = false, accion }) => {
  return (
    <button
      onClick={() => accion(texto)}
      style={{
        backgroundColor: color,
        width: ancho ? '240px' : '100px',
        padding: '10px',
        marginRight: '30px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      <span
        style={{
          color: color === '#9B9B9B' ? 'black' : 'white',
          fontSize: '18px',
        }}
      >
        {texto}
      </span>
    </button>
  );
};

export default ButtonCalc;
