import React, { useState } from 'react';
import { FormControl, Input,Button} from '@mui/material';
import axios from 'axios';
import '../SearchComponent/styles.css'
import CardComponent from '../CardComponent/CardComponent'


const Search = () => {

  const [user, setUser] = useState([]);
  const [data, setData] = useState([]);

  const apiURL = 'https://api.github.com/users/';


  const inputHandler = (e) => {
  let userToLowerCase = e.target.value.toLowerCase();
  setUser(userToLowerCase)
  
  }


  const handleSubmit = () => {
    axios.get(apiURL+user).then((res => {
      setData(res.data)
      console.log('RES DATA: ', res.data)
      console.log(data)
    })).catch((e) => {
      console.log(e)
    })
    }

  return (
    <>
    <div className='form-container'>
   <FormControl className="form-control" >
   <Input id="my-input" aria-describedby="username" placeholder='Ingresar Username' fullWidth onChange={inputHandler} />
   <Button onClick={handleSubmit} >Clickeame puto </Button>
   {data.length === 0 ? '' : <CardComponent 
   img={data.avatar_url}
   name={data.name}
   userName={data.login}
   />}
    </FormControl>
    </div>
    </>
  )

}

 /*{
    data.length === 0 ? '' :<> <Card variant="outlined"> {data.login}</Card> 
    <img src={data.avatar_url} alt="Imagen usuario github"></img>
     <span>{data.name}</span></>
    }*/
export default Search;