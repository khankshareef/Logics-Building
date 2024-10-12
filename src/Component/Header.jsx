import React, { useState } from 'react';
import Content from './Content';

function Header(props) {
 const coling=props.coling
  const [update,setupdate] = useState("");
  function changings(e) {
    setupdate(e.target.value);
  }
  const Touppercase = () =>{
    setupdate(update.toUpperCase())
  }
  const ToLowercase = () =>{
    setupdate(update.toLowerCase())
  }

  return (
    <div className='Container'style={{backgroundColor:coling}}>
      <div>
      </div>
      <h1 style={{marginLeft:'500px',}}><span style={{color:coling=='black'? 'white' :'black'}}>Eneter your Dynamic text Hear:</span></h1>
      <div className='textcenter'>
        <textarea  value={update} onChange={changings} className='texting'  style={{marginLeft:'500px',
          width:'600px',
          height:'200px',
          padding:'10px',
        }}>
</textarea>
      <div className='buttoning' style={{marginLeft:'660px'}}>
        <button  onClick={Touppercase} className="btn btn-primary my-3 mx-3">Convert To UP</button>
        <button  onClick={ToLowercase} className="btn btn-primary">Convert To Low</button></div></div>
     <h3 style={{marginLeft:'520px',color:coling=='black'? 'white' :'black'}}>Your Writing Text Count is:-{update.length}</h3>
     <h3 style={{marginLeft:'520px',color:coling=='black'? 'white' :'black'}}>Your Writing Words Read Time :-{0.008*update.split("").length}</h3>
    <div>
    </div>
    <Content colors={props.coling}/>
    </div>
  )
}

export default Header