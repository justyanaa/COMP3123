import React, { Component } from 'react';

function Student(props) {
    return (
        <>
        <h3>{props.stID}</h3>
        <h4>{props.stName}</h4>
        <h5>{props.stCollege}</h5>
        </>
    )
}
export default Student