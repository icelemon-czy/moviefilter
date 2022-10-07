import React from "react";

export default function Rate(props){
    function rateLabel(){
        if(props.open){
            return (<label> Rate <span> &#94;</span> </label>)
        }else{
            return (<label> Rate <span>&#711;</span> </label>)
        }
    }

    function rateOptionElement(i) {
        switch (i) {
            case 0:
                return (<label> <input type="checkbox" id="0" defaultChecked={props.rates[i]}
                                       onChange={() => props.handelCheck(0)}/> Any rating <br/> </label>);
            case 1:
                return (<label> <input type="checkbox" id="1" defaultChecked={props.rates[i]}
                                       onChange={() => props.handelCheck(1)}/> &#9733; &#9734; &#9734; &#9734; &#9734; &#9734; &#9734; &#9734; &#9734; &#9734;
                    <br/></label>);
            case 2:
                return (<label> <input type="checkbox" id="2" defaultChecked={props.rates[i]}
                                       onChange={() => props.handelCheck(2)}/> &#9733; &#9733; &#9734; &#9734; &#9734; &#9734; &#9734; &#9734; &#9734; &#9734;
                    <br/></label>);
            case 3:
                return (<label> <input type="checkbox" id="3" defaultChecked={props.rates[i]}
                                       onChange={() => props.handelCheck(3)}/> &#9733; &#9733; &#9733; &#9734; &#9734; &#9734; &#9734; &#9734; &#9734; &#9734;
                    <br/></label>);
            case 4:
                return (<label> <input type="checkbox" id="4" defaultChecked={props.rates[i]}
                                       onChange={() => props.handelCheck(4)}/> &#9733; &#9733; &#9733; &#9733; &#9734; &#9734; &#9734; &#9734; &#9734; &#9734;
                    <br/></label>);
            case 5:
                return (<label> <input type="checkbox" id="5" defaultChecked={props.rates[i]}
                                       onChange={() => props.handelCheck(5)}/> &#9733; &#9733; &#9733; &#9733; &#9733; &#9734; &#9734; &#9734; &#9734; &#9734;
                    <br/></label>);
            case 6:
                return (<label> <input type="checkbox" id="6" defaultChecked={props.rates[i]}
                                       onChange={() => props.handelCheck(6)}/> &#9733; &#9733; &#9733; &#9733; &#9733; &#9733; &#9734; &#9734; &#9734; &#9734;
                    <br/></label>);
            case 7:
                return (<label> <input type="checkbox" id="7" defaultChecked={props.rates[i]}
                                       onChange={() => props.handelCheck(7)}/> &#9733; &#9733; &#9733; &#9733; &#9733; &#9733; &#9733; &#9734; &#9734; &#9734;
                    <br/></label>);
            case 8:
                return (<label> <input type="checkbox" id="8" defaultChecked={props.rates[i]}
                                       onChange={() => props.handelCheck(8)}/> &#9733; &#9733; &#9733; &#9733; &#9733; &#9733; &#9733; &#9733; &#9734; &#9734;
                    <br/></label>);
            case 9:
                return (<label> <input type="checkbox" id="9" defaultChecked={props.rates[i]}
                                       onChange={() => props.handelCheck(9)}/> &#9733; &#9733; &#9733; &#9733; &#9733; &#9733; &#9733; &#9733; &#9733; &#9734;
                    <br/></label>);
            case 10:
                return (<label> <input type="checkbox" id="10" defaultChecked={props.rates[i]}
                                       onChange={() => props.handelCheck(10)}/> &#9733; &#9733; &#9733; &#9733; &#9733; &#9733; &#9733; &#9733; &#9733; &#9733;
                    <br/></label>);
        }

    }

    function rateOption(){
        if(props.open){
            return (<div id={"rateList"}>
                {rateOptionElement(0)}
                {rateOptionElement(1)}
                {rateOptionElement(2)}
                {rateOptionElement(3)}
                {rateOptionElement(4)}
                {rateOptionElement(5)}
                {rateOptionElement(6)}
                {rateOptionElement(7)}
                {rateOptionElement(8)}
                {rateOptionElement(9)}
                {rateOptionElement(10)}
            </div>);
        }
    }

    return(
       <div id={"rateBlock"}>
           <button onClick={props.handleButtonClick}>
               {rateLabel()}
           </button>
           <br/>
           {rateOption()}
       </div>
    )
}