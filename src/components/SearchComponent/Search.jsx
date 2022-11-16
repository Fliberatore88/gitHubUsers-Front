import React, { useEffect, useState } from 'react';
import { FormControl, Input,Button} from '@mui/material';
import axios from 'axios';
import '../SearchComponent/styles.css'
import CardComponent from '../CardComponent/CardComponent'
import NoDataComponent from '../NoDataComponent/NoDataComponent';


const Search = () => {

  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [showError, setShowError] = useState(false)

  const apiURL = 'https://api.github.com/users/';


  const handleChange = (e) => {
  let valueToLowerCase = e.target.value.toLowerCase();
  setValue(valueToLowerCase)
  
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter"){
      handleSubmit();
    }
  }

useEffect (() => {
if(error === true) {
  setShowError(true)
  setData([])
  console.log(showError)
}

},[error])

  const handleSubmit = () => {
    axios.get(apiURL+value).then((res => {
      setData(res.data)
      console.log(data)
      setError(false)
    })).catch((e) => {
      e.response.status === 404 ? setError(true) : setError(false)
      console.log(e)
    })
    setValue("")
    }

  return (
    <>
    <div className='form-container'>
   <FormControl className="form-control" >
   <Input id="my-input" aria-describedby="username" placeholder='Ingresar Username' fullWidth value={value} onChange={handleChange} onKeyPress={handleKeyPress} />
   <Button type="submit" onClick={handleSubmit} >Search</Button>
   {showError == true ? <NoDataComponent/> : ''}
   {data.length === 0 ?  ''  : <CardComponent 
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