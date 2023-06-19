import { useState } from "react";

const useCalculator = () => {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState('');
  const operators = ['-', '+', '/', '*'];

  const inputValue = (value: number) => {
    return num === 0 ? setNum(value) : setNum(num + value);
  };

  const clear = (value: string) => {
    if (value === "C") {
      setNum(0);
      setOldNum(0);
      setResult(0);
      setOperator('');
    }
  };

  const deleteHandler = (label: string) => {
    if (label === 'DEL') {
      const convertToString = num.toString();
      const removeLastLetter = convertToString.slice(0, -1);

      return setNum(Number(removeLastLetter));
    }
  }

  const porcentage = (value: string) => {
    return value === "%" && setNum(num / 100);
  };

  const changeSign = (label: string) => {
    if (label === "-/+") {
      return num > 0 ? setNum(-num) : setNum(Math.abs(num));
    }
  };

  const operationHandler = (value: any) => {
    if (operators.includes(value)) {
      setOperator(value)
      setOldNum(num)
      setNum(0)
    }
  };

  const calculate = (label: string) => {
    const calculations: any = {
      '-': oldNum - num,
      '+': parseFloat(oldNum.toString()) + parseFloat(num.toString()),
      '*': oldNum * num,
      '/': oldNum / num
    }

    if (label === '=') {
      setResult(calculations[operator]);
    }
  };

  return {
    inputValue,
    porcentage,
    changeSign,
    clear,
    deleteHandler,
    num,
    oldNum,
    result,
    operator,
    operationHandler,
    calculate,
  };
};

export default useCalculator;
