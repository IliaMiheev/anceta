import React, { useState } from 'react';
import "./Reg.css";

const App = () => {
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');

        const handleClick = (event) => {
            event.preventDefault();
            console.log(`Name 1: ${name1}`);
            console.log(`Name 2: ${name2}`);
        };

    return (
        <div id="container">
            <h1 style={{ opacity: 0 }}>ЗАГОЛОВОК ДЛЯ УВЕЛИЧЕНИЯ РАЗМЕРА</h1>
            <form className="registration-form">
                <h1 id="reg">REGISTRATION</h1>

                <div className="div">
                    <label htmlFor="name" className="form-label">Name player 1:</label>
                    <input className="form-input" type="text" value={name1} onChange={(e) => setName1(e.target.value)} />
                </div>

                <div className="div">
                    <label htmlFor="name" className="form-label">Name player 2:</label>
                    <input className="form-input" type="text" value={name2} onChange={(e) => setName2(e.target.value)} />
                </div>

                <button onClick={handleClick} className="form-button">Register</button>
            </form>

            <h1 style={{ opacity: 0 }}>ЗАГОЛОВОК ДЛЯ УВЕЛИЧЕНИЯ РАЗМЕРА</h1>
        </div>
    );
};
export default App;