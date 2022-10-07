import MovieVo from "./movieVo";
import React from "react";

export default function Output(props){
    if(props.list.length>0) {
        var movielist = props.list.map((movie)=><MovieVo key={movie[0]} name={movie[0]} rate={movie[1]} genre={movie[2]}/>)
        return (
            <div id="movieList">
                {movielist}
            </div>
        );
    }
}