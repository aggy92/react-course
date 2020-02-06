import React from 'react'
import {Link} from 'react-router-dom'
import {CardWrapper} from "./styles";

export const Card = props => {
    return (
        <CardWrapper>
            <Link to={`/pokemon/${props.id}`}>
                <p>{props.name}</p>
                <img src={props.imgUrl}/>
                </Link>
        </CardWrapper>
    )
};