import React, {useEffect, useState, useContext } from 'react';
import { Card, FormControl, InputLabel, Input, FormHelperText, Button } from '@mui/material';
import axios from 'axios';
import '../SearchComponent/styles.css'





const Search = () => {

  const [user, setUser] = useState([]);
  const [data, setData] = useState([]);

  const apiURL = 'http://localhost:3001/api/users/';

  const handleChange = (e) => {
    const value = e === null ? '' : e.target.value
    setUser(value)
    let consultaApi = axios.get(apiURL+user).then((res => {
      console.log(res.data)
      setData(res.data)
    }))
    console.log(data)
 
  }
  useEffect ( () => {

 


  },[])

  console.log(user)
  return (
    <>
  <div className='form-container'>
   <FormControl className="form-control" >
   <Input id="my-input" aria-describedby="username" placeholder='Ingresar Username' fullWidth />
  <Button onSubmit={handleChange} >Clickeame puto </Button>
    </FormControl>
    </div>
    </>
  )

}

export default Search;