import React, { useState } from 'react'

function Footer({colorsings}) {
    const [changes,setchanges] = useState("")
    const changeings=(e)=>{
        setchanges(e.target.value)
    }
    const changeing=()=>{
        setchanges(changes.toUpperCase())
    }
    const changeingi=()=>{
        setchanges(changes.toLowerCase())
    }
  return (
    <>
    <div className='converting' style={{ margin:'60px',
        marginLeft:'600px',backgroundColor:colorsings,
    }}>
        <input type='text' value={changes} onChange={changeings} style={{width:'250px'}}></input>
        <button onClick={changeing} style={{marginLeft:'340px',
            position:'relative',
            top:'-0px',
            left:'-330px'
        }}>UP</button>
        <button onClick={changeingi} style={{position:'relative',
            left:'-670px'
        }}>Low</button>
        <h3 style={{color:colorsings==='black' ? "white" : 'black',}}>Your Entering Data is:-{changes}</h3>
    </div>
    
    </>
  )
}

export default Footer