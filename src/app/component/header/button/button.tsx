"use client";
 interface Iprops{

    
        text:string
    }
    
 
  
  
  
  const Button =(props:Iprops)=>{
    const handleClick=()=>{
        alert("Messaged send")

    }
     return(
<button 
onClick={handleClick}

className="button">{props.text}
</button>
    );
};
export default Button