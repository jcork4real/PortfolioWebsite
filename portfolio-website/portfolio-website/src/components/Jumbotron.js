import React from "react";
import styled from 'styled-components';

import {
    Jumbotron
  } from 'reactstrap';
  
const Content = styled.div`
border: solid black;
left: 15%;
top:20%;
width:70%;
position:relative;
`;

const Name = styled.h1`
color: white;
font-weight: 500;
font-family: Raleway;
font-size: 3.5vw;
`;



const JumboTron = () =>{
        // console.log(props)

    return(
        <Content>
        <Jumbotron >
            <Name>Jarone McCorkle</Name>
            <p>Full Stack Software Engineer</p>
        </Jumbotron>
        </Content>
    )
}

export default JumboTron