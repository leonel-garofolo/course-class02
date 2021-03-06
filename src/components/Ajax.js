import React from 'react';

class Ajax extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            nombre: '',
            imagen: ''
        }
    }

    componentDidMount() {
        fetch("https://api.github.com/users/leonel-garofolo")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                nombre: result.name,
                imagen: result.avatar_url
              });
            },
            // Nota: es importante manejar errores aquí y no en 
            // un bloque catch() para que no interceptemos errores
            // de errores reales en los componentes.
            (error) => {
              this.setState({
                nombre: 'error',
                imagen: null
              });
            }
          )
      }
      
      render(){
        return (
            <div>
            <h1>Nombre: {this.state.nombre}</h1>
            <img src={this.state.imagen}></img>
           </div>
        );
    }
}
export default Ajax;