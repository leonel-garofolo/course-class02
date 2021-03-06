import React from 'react';
import Ajax from './components/Ajax';


function ProducirMuchosJsx(props){
    let arr= [props.cantElementos];
    let i= 0;
    for(i ; i < props.cantElementos; i++){
        arr.push(<input key = {i} type="button" value={"click " + i}></input>);
    }
    return arr;
}

function App3() {
    return (
        <div>
            {(function(){
                return (<h1>Funcion</h1>)
            })()}
            <ProducirMuchosJsx  cantElementos={10}/>
            <br />
            <Ajax />
        </div>
    );
}
export default App3;