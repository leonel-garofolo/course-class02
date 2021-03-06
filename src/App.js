import './App.css';
import BotonIncrement from './components/BotonIncrement';
import React from 'react';
import Timer from './components/Timer';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      valorBoton: [1000, 500, 250]
    }
    
    this.incrementar = this.incrementar.bind(this);
  }

  
  incrementar(index){      
  
    this.setState(function(viejoEstado){
      switch(index){
        case 0:
          viejoEstado.valorBoton[0] ++;
          console.log(index + "!" + viejoEstado.valorBoton[0]);
          break;
        case 1:
          viejoEstado.valorBoton[1] ++;
          console.log(index + "!" + viejoEstado.valorBoton[1]);
          break;
        case 2:
          viejoEstado.valorBoton[2] ++;
          console.log(index + "!" + viejoEstado.valorBoton[2]);
          break;
        default:
          break;
      }

      /* 
        se debe retornar el objeto modificado
        para que cambie realmente el state de la 
        pantalla
      */

      return viejoEstado;
    });
    
  }

  render(){
    return (
      <div>
        <h1>Bienvenido: {this.props.nombre}</h1>
        <BotonIncrement valor={this.state.valorBoton[0]} incrementar={() => this.incrementar(0)} />    
        <BotonIncrement valor={this.state.valorBoton[1]} incrementar={() => this.incrementar(1)} />    
        <BotonIncrement valor={this.state.valorBoton[2]} incrementar={() => this.incrementar(2)} />    
        <br />
        <Timer />
      </div>
    );
  }

}

export default App;
