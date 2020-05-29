import React, {useState} from 'react';
import './spinner.css';

const Spinner = () => {

    const [n1,setN1]= useState(1);

    const hadleCount = (event) => {
  
        setN1(Number(event.target.value));
      }
    
    const addCount = () => {
        setN1(n1 + 1)
    }
    const lessCount = () => {
        if(n1 !== 1){
            setN1(n1 - 1)
        }
    }
        return(
            <div className="SpinnerAtom">
                <button onClick={() => lessCount()} className="material-icons SpinnerAtom__btn1">delete</button>
                <input type="text" id='result' value={n1} className="SpinnerAtom__num" readOnly onChange={hadleCount} />
                <button onClick={() => addCount()} className="material-icons SpinnerAtom__btn2">add</button>
            </div>
        )
 }


export default Spinner;