import { useState } from "react"

export default function Calculadora(){

    let [valor1, setValor1] = useState(Number);
    let [valor2, setValor2] = useState(Number);
    let [result, setResult] = useState();
    let opcao = useState('')
    const Soma = () =>{
        setResult(valor1 + valor2)
    }
    const Subtração = () =>{
        setResult(valor1 - valor2)
    }
    const Multiplicacao = () =>{
        setResult(valor1 * valor2)
    }
    const Divisao = () =>{
        setResult(valor1 / valor2)
    }


    const handleClear =() => {
       setValor1(0);
       setValor2(0);
    };
    const handleChangeInput1 =(evento) => {
        setValor1(evento.target.value);
        
     };
    const handleChangeInput2 =(evento) => {
        setValor2(evento.target.value);
        
     };

    const handleKeyInput = (evento) => {
        if(evento.key==='Escape'){
            handleClear();
        }else if(evento.key==='Enter'){
            alert(opcao)
           if(opcao === 'soma'){
            
            Soma()
           }else if(opcao === 'subtracao'){
            Subtração()
           }else if(opcao === 'multiplicacao'){
            Subtração()
           }else if(opcao === 'divisao'){
            Subtração()
           }
        }
}
    return(
    <div>
    
        <h1>Selecione a operação desejada</h1>
        <form value ={opcao}>
        Soma
        <input type="radio" name="opcao" value={"soma"}/>
        <p></p>
        Subtração
        <input type="radio" name="opcao" value={"subtracao"}/> 
        <p></p>
        Multplicação
        <input type="radio" name="opcao" value={"multiplicacao"}/>
        <p></p>
        Divisão    
        <input type="radio" name="opcao" value={"divisao"}/>
        </form>
        <h1>Escreva os valores</h1>
        <input className="valor1" type="number" placeholder="Valor 1" onChange={handleChangeInput1} onKeyUp={handleKeyInput} value={valor1}/>
        <input className="valor2" type="number" placeholder="Valor 2" onChange={handleChangeInput2} onKeyUp={handleKeyInput} value={valor2}/>
        {result && <p> {result}</p>}
    </div>
    )
}
