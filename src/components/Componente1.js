import React from 'react';

class Componente1 extends React.Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        alert('componentWillMount 1');

    }

    componentDidMount(){
        alert('componentDidMount 1');
    }

    componentWillUpdate(){
        alert('componentWillUpdate 1');
    }

    componentDidUpdate(){
        alert('componentDidUpdate 1');
    }


    componentWillUnmount(){
        alert('componentWillUnmount 1');
    }


    render(){
        return (
           <h1>Componente 1</h1>
        );
    }

}

export default Componente1;