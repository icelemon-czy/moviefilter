import StarRatings from 'react-star-ratings';
import React from "react";
export default function MovieVo(props){
    return (
        <div className={"vo"}>
            <span className={"name"}>{props.name} </span>
            <span className={"genre"}>{props.genre}</span>
            <br/>
            <StarRatings
                rating={props.rate}
                numberOfStars={10}
                starDimension="8px"
                starSpacing="1px"
            />
        </div>
    );
}