import React, { useState } from 'react'

const Container = () => {
    const [text,setText]=useState("")

    const handeUpperCase=()=>{
        let abc=text.toUpperCase()
        setText(abc)
    }

    const handleLowerCase=()=>{
        setText(text.toLocaleLowerCase())
    }
    const clearAll=()=>{
        setText("")
    }

    return (
        <div className='container py-10 px-12'>
            <div class="form-field">
                <label for="fieldTextarea" class="form-label">Message</label>
                <textarea class="form-control" placeholder='Enter text here' id="fieldTextarea" rows="8" value={text} onChange={(e)=>{setText(e.target.value)}}></textarea>
               
            </div>
            <div className="btns py-5 ">
            <button className='btn-solid theme-primary mx-5' onClick={handeUpperCase}>Upper Case</button>
            <button className='btn-solid theme-primary mx-5' onClick={handleLowerCase}>Lower Case</button>
            <button className='btn-solid theme-primary mx-5' onClick={clearAll}> Clear</button>
            </div>
        </div>
    )
}

export default Container
