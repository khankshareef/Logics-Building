import React, { useEffect, useState } from 'react';
import Footer from './Footer';

export default function Content({colors}) {
    const [time,settime] = useState(0);
   useEffect(()=>{
    setTimeout(() => {
        settime(time+1)
    }, 1000);
   })
  return (
    <>
    <div className='Timing' style={{position:'relative',
        left:'550px', backgroundClor:colors}}>
      <h1 style={{color:colors=='black' ? 'white' : 'black'}}>Your Runtime Number is: {time}</h1>
    </div>
    <Footer colorsings={colors}/>
    </>
  )
}
