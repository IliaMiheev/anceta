//мой код
import React, { useState } from 'react';
import './style.css'
const App = () => {
    const [nam1, setNam1] = useState(0)
    const [nam2, setNam2] = useState(0)
    const [sum, setSum] = useState(0)
    const Set3 = (e) =>{
        e.preventDefault();
        setSum(+nam1 + +nam2)
    }
    const Set1 = (e) => {
        setNam1(e.target.value)
    }
    const Set2 = (e) => {
        setNam2(e.target.value)
    }
    return (
        <form>
            <input onChange={Set1} value={nam1} className='item' type="text" placeholder="Enter first namber" />
            <input onChange={Set2} value={nam2} className='item' type="text" placeholder="Enter second namber" />
            <button onClick={Set3} className='item'>calculate</button>
            <h1>sum = {sum}</h1>
        </form>
    );
};
export default App;
//код chatGPT
import React, { useState } from 'react';
import './style.css';

const NumberInput = ({ value, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            className='item'
            placeholder="Enter number"
        />
    );
};

const Calculator = () => {
    const [num1, setNum1] = useState('0');
    const [num2, setNum2] = useState('0');
    const [sum, setSum] = useState(0);

    const handleCalculate = (e) => {
        e.preventDefault();
        setSum(+num1 + +num2);
    };

    const handleNum1Change = (e) => {
        setNum1(e.target.value);
    };

    const handleNum2Change = (e) => {
        setNum2(e.target.value);
    };

    return (
        <form>
            <NumberInput value={num1} onChange={handleNum1Change} />
            <NumberInput value={num2} onChange={handleNum2Change} />
            <button onClick={handleCalculate} className='item'>Calculate</button>
            <h1>Sum: {sum}</h1>
        </form>
    );
};
export default Calculator;