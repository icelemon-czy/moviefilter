import React from "react";

function Name(props){
    function DefaultInput(){
        return(
        <input
            id ={"default"}
            type={"text"}
            value={"Enter movie name"}
            onChange={props.handleInputChange}
        />
        )
    }
    function NormalInput(){
        return(
        <input
            type={"text"}
            value={props.MovieName}
            color={"black"}
            onChange={props.handleInputChange}
        />
        )
    }
    function Input(){
        if(typeof props.MovieName == "undefined" || props.MovieName == null || props.MovieName.trim()===""){
            return DefaultInput();
        }
        return NormalInput();
    }

    return(
        <div>
            {Input()}
            <br/>
        </div>
    );
}

export default Name;