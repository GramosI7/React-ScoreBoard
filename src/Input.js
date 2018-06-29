import React from "react";

const Input = (props) => {
    
    return (
        <div className="input-group mb-1">
                <input onKeyPress={props.keyPress} value={props.dataInput} onChange={props.inputFunction} type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
                <button onClick={props.clickButton} className="btn btn-primary" type="button">GO !</button>
        </div>
    )
}

export default Input;