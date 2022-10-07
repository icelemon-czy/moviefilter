import React from "react";
import style from "../style.css";
function Genre(props){
    function genreLabel(){
        if(props.open){
            return (<label> Genre <span>&#94;</span> </label>)
        }else{
            return (<label> Genre <span>&#711;</span> </label>)
        }
    }

    function genreOptionElement(i){
        switch (i) {
            case 0:
                return (<label> <input type="checkbox" id="0" defaultChecked={props.genres[i]}
                                       onChange={() => props.handelCheck(0)}/> Any genre <br/> </label>);
            case 1:
                return (<label> <input type="checkbox" id="1" defaultChecked={props.genres[i]}
                                       onChange={() => props.handelCheck(1)}/> Action
                    <br/></label>);
            case 2:
                return (<label> <input type="checkbox" id="2" defaultChecked={props.genres[i]}
                                       onChange={() => props.handelCheck(2)}/> Comedy
                    <br/></label>);
            case 3:
                return (<label> <input type="checkbox" id="3" defaultChecked={props.genres[i]}
                                       onChange={() => props.handelCheck(3)}/> Drama
                    <br/></label>);
            case 4:
                return (<label> <input type="checkbox" id="4" defaultChecked={props.genres[i]}
                                       onChange={() => props.handelCheck(4)}/> Thriller
                    <br/></label>);
        }
    }

    function genreOption() {
        if(props.open){
            return(
            <div id={"genreList"}>
                {genreOptionElement(0)}
                {genreOptionElement(1)}
                {genreOptionElement(2)}
                {genreOptionElement(3)}
                {genreOptionElement(4)}
            </div>
            );
        }
    }
    return(
        <div id={"genreBlock"}>
            <button onClick={props.handelButtonClick}>
                {genreLabel()}
            </button>
            {genreOption()}
        </div>
    )
}

export default Genre