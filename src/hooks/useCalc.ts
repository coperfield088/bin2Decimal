import { useState } from "react";

export const useCalculadora = () => {
  const [numeroAnterior, setNumeroAnterior] = useState("0");
  const [number, setNumber] = useState("0");

  const limpiar = () => {
    setNumber("0");
    setNumeroAnterior("0");
  };

  const armarNumero = (numeroTexto: string) => {
    if (number.includes(".") && numeroTexto === ".") return;

    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numeroTexto === ".") {
        setNumber(number + numeroTexto);
      } else if (numeroTexto === "0" && number.includes(".")) {
        setNumber(number + numeroTexto);
      } else if (numeroTexto !== "0" && !number.includes(".")) {
        setNumber(numeroTexto);
      } else if (numeroTexto === "0" && !number.includes(".")) {
        setNumber(number);
      } else {
        setNumber(number + numeroTexto);
      }
    } else {
      setNumber(number + numeroTexto);
    }
  };

  const binarioADecimal = () => {
    let binario = number;
    let decimal = 0;

    for (let i = 0; i < binario.length; i++) {
      const digito = binario[binario.length - 1 - i];

      decimal += parseInt(digito) * Math.pow(2, i);
    }

    setNumber(decimal.toString());
  };

  const btnDelete = () => {
    if (number.length === 1 || (number.length === 2 && number.includes("-"))) {
      setNumber("0");
    } else {
      setNumber(number.slice(0, -1));
    }
  };

  return {
    number,
    numeroAnterior,
    limpiar,
    btnDelete,
    armarNumero,
    binarioADecimal,
  };
};
