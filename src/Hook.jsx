//мой код
import React, { useState } from 'react';
function Button() {
    const [Text, setText] = useState("привет!");

    function handleText() {
        setText('как дела?')
    }

    return (
        <button onClick={handleText}>{Text}</button>
    );
}
export default Button;
// код chatGPT
import React, { useState } from 'react';
function Button(props) {
    return (
        <button onClick={props.onClick}>{props.text}</button>
    );
} 

function App() {
    const [Text, setText] = useState("привет!");

    function handleText() {
        setText('как дела?')
    }
    return (
        <div>
            <Button onClick={handleText} text={Text} />
        </div>
    );
}
export default App;