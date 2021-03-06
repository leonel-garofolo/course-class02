
import React from 'react';

class ShowHide extends React.Component {
    constructor(props){
        super(props);        
        this.state= {
            clase: 'visible'
        }
        this.cambiarEstado = this.cambiarEstado.bind(this);
    }

    cambiarEstado(e){
        console.log(e.target.selectedIndex);
        this.setState(function(old){

            switch(e.target.selectedIndex){
                case 0:
                    return (
                        this.state.clase='visible'
                    );
                case 1:
                    return (
                        this.state.clase='oculto'
                    );
                default:
                    return (
                        this.state.clase='visible'
                    )
            }            
        });
    }


    render(){
        return (
            <div>
                <select onChange={z => this.cambiarEstado(z)}>
                    <option>VISIBLE</option>                    
                    <option>OCULTO</option>                    
                </select>
                <br />
                <span className={this.state.clase}>
                    este es un texto
                </span>

            </div>
        )
    }
}

export default ShowHide;