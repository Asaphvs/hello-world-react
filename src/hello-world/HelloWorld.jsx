import { useState } from "react";

export default function HelloWorld(){
  
    let [name, setName] = useState('');
    let [message, setMessage] = useState('');

    const handleHelloWorld =() => {
        setMessage(`Hello World, ${name}!`);
    };
    const handleClear =() => {
        setMessage('');
        setName('');
    };
    const handleChangeInput =(evento) => {
       setName(evento.target.value);
    };

    // Crtl-K + Ctrl-C - comenta / Ctrl-K + Ctrl-U - descomenta
    const handleKeyInput = (evento) => {
            console.log(evento)
            if(evento.key==='Escape'){
                handleClear();
            }else if(evento.key==='Enter'){
                handleHelloWorld();
            }
    }

    return (
    <div>
    <h1>Hello World!!</h1>
    <input type="text"  onChange={handleChangeInput} onKeyUp={handleKeyInput} value={name}/>
    <button onClick={handleHelloWorld}>HelloWorld</button>
    <button onClick={handleClear}>Limpar</button>
    {message && <p> {message}</p>}
    </div>
)   
}