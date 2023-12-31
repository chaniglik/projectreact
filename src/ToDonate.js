import { useState,useContext } from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { fromXtoShekel } from "./dollarUtils";
import { CoinContext, ThemeContext } from "./Contexts";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';  
import { useNavigate } from 'react-router-dom';
 
const ToDonate = (props) => {
  const navigate = useNavigate();
  let coinType = useContext(CoinContext);
  const saveDetails = (data) => {
    const currentDate = new Date();
    const sum = fromXtoShekel(data.sum, coinType.coin.currencyType, coinType.coin.dollarAmount) * 2
  }


    let [errors,setErrors] = useState({});
    let [listDonates,setListDonates]=useState({
        name:"",
        amount:0,
        dedication:"",
        dateDonate:new Date()
     });
     const handelSubmit=(e)=>{
        e.preventDefault();
        let result=validate();
        if(Object.keys(result).length===0){
            listDonates.dateDonate =new Date();//להוסיף תאריך מדויק
            const amount = fromXtoShekel(listDonates.amount, coinType.coin.currencyType, coinType.coin.dollarAmount) 
    const newData = {
      name: listDonates.name,
      amount: amount,
      dedication: listDonates.dedication,
      dateDonate: listDonates.dateDonate
    
    };
    setListDonates(newData);
    props.addPeopleToList(listDonates);
            document.getElementById("name").value ="";
            document.getElementById("number").value ="";
            document.getElementById("ded").value ="";
            navigate('/Donation');
        }
        
        else setErrors(result);
     };
     let err ={};
     const validate = ()=>{      
        if(!listDonates.name)
         err.name = "שם הוא שדה חובה";
         if(!listDonates.amount||listDonates.amount<1)
          err.amount = "סכום לא תקין";
         return err;
        
     };
     const change =(e)=>{
      let result=validate();
        let inputName = e.target.name;
        let inputValue = e.target.value;
        let copy = {...listDonates,[inputName]:inputValue};
        setListDonates(copy);
        setErrors(result )
        err.amount='';
     };
    return ( 
        <>
        <div style={{margin:"2% 35%",direction:"rtl",textAlign:'center'}}>
    <Card sx={{ maxWidth: 345,margin:7 }}>
    <CardMedia
      sx={{ height: 140, width:220,margin:7}}
      image="https://www.pitchonlev.org.il/wp-content/uploads/2015/11/logo_07.jpg"
      
    />
    <CardContent>
      <Typography sx={{color:"rgb(44, 44, 139)"}} gutterBottom variant="h5" component="div">
        לתרומה:
      </Typography>
      <form onSubmit={handelSubmit}>
      <TextField  sx={{margin:1}} type="Text"  name="name" id="name" onChange={change}    label="שם" variant="outlined"  />
      {errors.name&&<Stack sx={{ width: '100%' }} spacing={2}>      
    <Alert severity="error"> {errors.name && <div>{errors.name}</div>} </Alert>
    </Stack>}
      <TextField sx={{margin:1}} type="Number" name="amount" id="number" onChange={change}   label="סכום" variant="outlined"  />
      {errors.amount&&<Stack sx={{ width: '100%' }} spacing={2}>      
    <Alert severity="error"> {errors.amount && <div>{errors.amount}</div>} </Alert>
    </Stack>}
      <TextField sx={{margin:1}} type="Text" name="dedication" id="ded" onChange={change}  label="הקדשה" variant="outlined"  />
      <CardActions>
      <Stack    spacing={2} direction="row">        
          <Button  type="submit" sx={{bgcolor:'#303F9F'}} color='info' variant="contained">תרום</Button>
        </Stack>
    </CardActions>
       </form>
    </CardContent>
   
  </Card>
  </div>
</>
        
    ) }
   
   
    
   
        
     
 
export default ToDonate;