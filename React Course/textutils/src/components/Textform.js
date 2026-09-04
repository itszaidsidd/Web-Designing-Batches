// rfc 

import React, { useState } from 'react'
export default function Textform(props) {
    const [text, setText] = useState("enter text here ")
    const handelonchange = (event) => {
        let newText = event.target.value;
        setText(newText);

    }
    const handelUperCase = () => {
        setText(text.toUpperCase())
    }
    const handelLowerCase = () => {
        setText(text.toLowerCase())
    }
    const handelClear = () => {
        setText("");
    }

    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <h1 className='my-3'>{props.title}</h1>
                    <textarea className="form-control" value={text} onChange={handelonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
                    <button type="button" onClick={handelUperCase} className="btn btn-primary my-3 mx-1">uparcase</button>
                    <button type="button" onClick={handelLowerCase} className="btn btn-primary my-3 mx-1">lowercase</button>
                    <button type="button" onClick={handelClear} className="btn btn-primary my-3 mx-1">clear</button>
                </div>
            </div>
            <div className=" container">
                <h2> your text summary </h2>
                <p>{text.split(" ").length} words and {text.length}charecter</p>
                <h2>Preview</h2>
                <p>{text}</p>
                </div>
        </>
    )
}
