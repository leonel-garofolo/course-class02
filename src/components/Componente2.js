import React from 'react';

class Componente2 extends React.Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        alert('componentWillMount 2');

    }

    componentDidMount(){
        alert('componentDidMount 2');
    }

    componentWillUpdate(){
        alert('componentWillUpdate 2');
    }

    componentDidUpdate(){
        alert('componentDidUpdate 2');
    }


    componentWillUnmount(){
        alert('componentWillUnmount 2');
    }

    render(){
        return (
           <h1>Componente 2</h1>
        );
    }

}

export default Componente2;