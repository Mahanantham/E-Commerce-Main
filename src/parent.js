import { useEffect, useState } from "react";

function Parent({m}){
    const[count,setcount]=useState(0)
    

    useEffect(
        ()=>{
            setcount(count+1)
        },[]
    )
    const countinc=()=>{
        setcount(count+1)
    }
    const countdec=()=>{
        setcount(count-1)
    }
  

    return(
        <div>
            <h1>parent component {m}</h1>
            <h1>add to cart:{count}</h1>
            <button onClick={countinc} >+</button>
            <button onClick={countdec}>-</button>
            <Maha/>
        </div>
    )
}
export default Parent;

function Maha(){
    let a="work"
    const[color,setColor]=useState("red")
    const changeColor=()=>{
        let a=color=="red"? "yellow":"red"
        setColor(a)
        let b=btn=="On"? "Off" :"On"
        setBtn(b)
    }
    const[btn,setBtn]=useState("On")
    

    return(
        <div>
            <h1>this is the rough {a}</h1>
            <div style={{height:"100px",width:"100px",borderRadius:"50%",backgroundColor:color}}>

            </div>
            <button onClick={changeColor }>{btn}</button>
        </div>
    )
}
