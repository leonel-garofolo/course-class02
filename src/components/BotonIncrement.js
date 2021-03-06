import React from 'react';

function BotonIncrement(props) {
    return (
        <div>
            <input type="button" onClick={props.incrementar} value={props.valor} ></input>
        </div>
    );
  }


export default BotonIncrement;