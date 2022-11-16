import React from 'react';
import { Card } from '@mui/material';

const CardComponent = (props) => {

  return (
    <Card className="card-container">
    <img src={props.img} alt=''></img>
    <h2>A {props.name}</h2>
    <h2>{props.userName}</h2>
    </Card>
  )
}
export default CardComponent;

 /*{
    data.length === 0 ? '' :<> <Card variant="outlined"> {data.login}</Card> 
    <img src={data.avatar_url} alt="Imagen usuario github"></img>
     <span>{data.name}</span></>
    }*/
