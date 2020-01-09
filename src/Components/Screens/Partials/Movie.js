import React from 'react'

export const WithPicture = function (props) {

    return (<div>

        <h3>{props.movie.title}</h3>
        <span> {props.movie.category} </span> <br/>
        <img src={props.movie.image} alt="img" />

    </div>)
}

export const WithoutPicture = function (props) {

    return (<div>

        <h3>{props.movie.title}</h3>
        <span> {props.movie.category} </span>

    </div>)
}