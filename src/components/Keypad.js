// Code Keypad Component Here

function Keypad (){
    return (
      <div>
        <input type="password" onChange={(e)=>{e.target.value
            console.log("Entering password...")
         }} />
      </div>
    );
}

export default Keypad;