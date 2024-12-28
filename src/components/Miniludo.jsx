import { useState } from "react"

const Miniludo = () => {
const [number1, setnumber1] = useState("roll the dice")
const [number2, setnumber2] = useState("roll the dice")
    const randomno = () => {
        setnumber1(Math.ceil(Math. random() * (6 - 0) + 0))
        setnumber2(Math.ceil(Math. random() * (6 - 0) + 0))
     }
     if (number1 === 1 || number2 === 1 ) {
         document.getElementById("one").style.display = "block"
         document.getElementById("onee").style.display = "block"
         document.getElementById("two").style.display = "none"
         document.getElementById("twoo").style.display = "none"
         document.getElementById("three").style.display = "none"
         document.getElementById("threee").style.display = "none"
         document.getElementById("four").style.display = "none"
         document.getElementById("fourr").style.display = "none"
         document.getElementById("five").style.display = "none"
         document.getElementById("fivee").style.display = "none"
         document.getElementById("six").style.display = "none"
         document.getElementById("sixx").style.display = "none"
     }
   
     if (number1 === 2 || number2 === 2 ) {
        document.getElementById("one").style.display = "none"
        document.getElementById("onee").style.display = "none"
        document.getElementById("two").style.display = "block"
        document.getElementById("twoo").style.display = "block"
        document.getElementById("three").style.display = "none"
        document.getElementById("threee").style.display = "none"
        document.getElementById("four").style.display = "none"
        document.getElementById("fourr").style.display = "none"
        document.getElementById("five").style.display = "none"
        document.getElementById("fivee").style.display = "none"
        document.getElementById("six").style.display = "none"
        document.getElementById("sixx").style.display = "none"
    }

    if (number1 === 3 || number2 === 3 ) {
        document.getElementById("one").style.display = "none"
        document.getElementById("onee").style.display = "none"
        document.getElementById("two").style.display = "none"
        document.getElementById("twoo").style.display = "none"
        document.getElementById("three").style.display = "block"
        document.getElementById("threee").style.display = "block"
        document.getElementById("four").style.display = "none"
        document.getElementById("fourr").style.display = "none"
        document.getElementById("five").style.display = "none"
        document.getElementById("fivee").style.display = "none"
        document.getElementById("six").style.display = "none"
        document.getElementById("sixx").style.display = "none"
    }

    if (number1 === 4 || number2 === 4 ) {
        document.getElementById("one").style.display = "none"
        document.getElementById("onee").style.display = "none"
        document.getElementById("two").style.display = "none"
        document.getElementById("twoo").style.display = "none"
        document.getElementById("three").style.display = "none"
        document.getElementById("threee").style.display = "none"
        document.getElementById("four").style.display = "block"
        document.getElementById("fourr").style.display = "block"
        document.getElementById("five").style.display = "none"
        document.getElementById("fivee").style.display = "none"
        document.getElementById("six").style.display = "none"
        document.getElementById("sixx").style.display = "none"
    }

    if (number1 === 5 || number2 === 5 ) {
        document.getElementById("one").style.display = "none"
        document.getElementById("onee").style.display = "none"
        document.getElementById("two").style.display = "none"
        document.getElementById("twoo").style.display = "none"
        document.getElementById("three").style.display = ""
        document.getElementById("threee").style.display = ""
        document.getElementById("four").style.display = "none"
        document.getElementById("fourr").style.display = "none"
        document.getElementById("five").style.display = "block"
        document.getElementById("fivee").style.display = "block"
        document.getElementById("six").style.display = "none"
        document.getElementById("sixx").style.display = "none"
    }

    if (number1 === 6 || number2 === 6 ) {
        document.getElementById("one").style.display = "none"
        document.getElementById("onee").style.display = "none"
        document.getElementById("two").style.display = "none"
        document.getElementById("twoo").style.display = "none"
        document.getElementById("three").style.display = "none"
        document.getElementById("threee").style.display = "none"
        document.getElementById("four").style.display = "none"
        document.getElementById("fourr").style.display = "none"
        document.getElementById("five").style.display = "none"
        document.getElementById("fivee").style.display = "none"
        document.getElementById("six").style.display = "block"
        document.getElementById("sixx").style.display = "block"
    }




  return (
    <div>
       
         
           <h1 className="text-danger mt-2 ms-3 d-flex">
             Dice 1 :
             <img src="one.jpg" alt="" className="ms-4 mt-2 d-non" id="one" width={30} height={30} />
             <img src="two.jpg" alt="" className="ms-4 mt-2 d-non"  id="two" width={30} height={30} />
             <img src="three.jpg" alt="" className="ms-4 mt-2 d-non"  id="three" width={30} height={30} />
             <img src="four.jpg" alt="" className="ms-4 mt-2 d-non" id="four" width={30} height={30} />
             <img src="five.jpg" alt="" className="ms-4 mt-2 d-non"  id="five" width={30} height={30} />
             <img src="six.jpg" alt="" className="ms-4 mt-2 d-non"  id="six" width={30} height={30} />
           </h1>

           <h1 className="text-danger mt-2 ms-3 d-flex"> Dice 2 :
             <img src="one.jpg" alt="" className="ms-4 mt-2 d-non" id="onee" width={30} height={30} />
             <img src="two.jpg" alt="" className="ms-4 mt-2 d-non"  id="twoo" width={30} height={30} />
             <img src="three.jpg" alt="" className="ms-4 mt-2 d-non"  id="threee" width={30} height={30} />
             <img src="four.jpg" alt="" className="ms-4 mt-2 d-non" id="fourr" width={30} height={30} />
             <img src="five.jpg" alt="" className="ms-4 mt-2 d-non"  id="fivee" width={30} height={30} />
             <img src="six.jpg" alt="" className="ms-4 mt-2 d-non"  id="sixx" width={30} height={30} />
           </h1>
       <button onClick={randomno} className="btn btn-secondary ms-3">Roll Dice</button>
    </div>
  )
}

export default Miniludo