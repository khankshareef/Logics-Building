
import React, { useState } from 'react';
import Content from './Component/Content';
import Footer from './Component/Footer';
import Header from './Component/Header';
function App() {
  const [coling, setcoling] = useState("white");

  const Data=[{
    id:'1',
    Name:'k shareef khan',
    title:'Hi i am k shareef khan from andhrapradesh recently graduate in the deapartment of BCA and i am searching job for web development',
},
{
    id:'2',
    Name:'P Naveen',
    title:'Hi i am k shareef khan from andhrapradesh recently graduate in the deapartment of BCA and i am searching job for web development',
},
{
    id:'3',
    Name:'J Babuji',
    title:'Hi i am k shareef khan from andhrapradesh recently graduate in the deapartment of BCA and i am searching job for web development',
},
]

  return (
    <>
    <div className='color-Container mx-3' style={{display:'flex',
    justifyContent:'center',
    padding:'15px',
      position:"relative",
      columnGap:'10px',
    }}>
    <button onClick={()=>setcoling('red')} className='red' style={{backgroundColor:'red',color:'white',width:'100px',borderRadius:'10px',border:'none'
    }}>red</button>
    <button onClick={()=>setcoling('blue')} className='blue' style={{backgroundColor:'blue',color:'white',width:'100px',height:'35px',borderRadius:'10px',border:'none'}}>blue</button>
    <button onClick={()=>setcoling('green')} className='green' style={{backgroundColor:'green',color:'white',width:'100px',height:'35px',borderRadius:'10px',border:'none'}}>green</button>
    <button onClick={()=>setcoling('yellow')} className='yellow' style={{backgroundColor:'yellow',color:'red',width:'100px',height:'35px',borderRadius:'10px',border:'none'}}>yellow</button>
    <button onClick={()=>setcoling('orange')} className='orange' style={{backgroundColor:'orange',color:'white',width:'100px',height:'35px',borderRadius:'10px',border:'none'}}>orange</button>
    <button onClick={()=>setcoling('white')} className='white' style={{backgroundColor:'white',color:'black',width:'100px',height:'35px',borderRadius:'10px',}}>white</button>
    </div>
    <div className='Containeseer' style={{backgroundColor:coling,
    }}>
      <div className='coloning' >
        <div className='form-check form-switch'>
  <input  className="form-check-input" type="checkbox"  onClick={()=>{setcoling(coling === "white" ? "black" : "white")}}  role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><span style={{color:coling==='black' ? 'white' : 'black'}}>Change Background color Hear</span></label>
  
</div>
<br style={{backgroundColor:'white'}}/>
        </div>
      <Header Data={Data} coling={coling}  /> 
      <Footer />
      <Content/>
    </div >
    </>
  )
}

export default App