import React, {useState}  from "react";

export default function InputValue(){
    const [value, setValue] = useState('')
    return(
        <>
            <p>Value: {value}</p>
            <input 
            type='text' 
            value={value} 
            className="form-control"
            onChange={event => setValue(event.target.value)}
            />
        </>
    )
}