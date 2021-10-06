
import './App.css';
import { Link } from "react-router-dom";
import {  Container, TextField, FormLabel } from "@material-ui/core";
import { MdAccessibility, MdAttachMoney, 
  MdStarBorder, MdTouchApp} from "react-icons/md";
import { IconContext } from "react-icons/lib";

import { useState } from 'react';


const LandingPage= () => {

const loginHandle = (e) => {
e.preventDefault();
setLogAlart(true)
}

const [ logAlart, setLogAlart ] = useState(false)



  return (
   
  <div className="LandingPage">

<IconContext.Provider value={{
color: "rgb(99, 21, 145)",
size: "100px",

        }}>
<br />
       <div className="welcome">

            <p className="welcometext">
              welcome to the bank
            that treats you as royalty.
            </p>

        </div>


<Container className="App">

<form noValidate autoComplete='off'>

<FormLabel  > 
  Stared (*) fields are compulsory
</FormLabel><br/> <br/>
        
<TextField

variant='outlined'
label='Account Name'
color='primary'
required
fullWidth


/>
<br/> <br/>



<TextField

label='Email'
//  type='email'
variant='outlined'
color='primary'
required
fullWidth

/>


<br/> <br/>


<TextField

label='Account Number'
variant='outlined'
type="number"
color='primary'
fullWidth

/>


<br/>
{
  logAlart && <div className='alart'>
     please enter a valid login details or create a new account
      </div>

}


 <br/> 
<button id="login" onClick={(e) => loginHandle(e)}>Login</button>

        

<br/>
<Link to="/RegisterUser">
  <button id="register">Register new user</button>
</Link>


</form>

</Container>






  <div className="cardsbox">

        <div className="card">
         <p>Best banking experience </p>
         
        <p className="cardicon"><MdStarBorder /> </p>
        </div>

        <div className="card">
         <p>Be in charge of your finances</p>
         <p className="cardicon"><MdAttachMoney /></p>
        </div>

        <div className="card">
         <p>We execute the commands of your finger tips</p>
         <p className="cardicon">  <MdTouchApp/> </p>
        </div>

        <div className="card">
         <p>We are waiting for you</p>
         <p className="cardicon"><MdAccessibility/> </p>
        </div>

  </div>


 


          <Link to="/RegisterUser">
            <button className="reg">Join us</button> 
          </Link>
          <br />

  </IconContext.Provider>
<br />
    </div>

  );
}

export default LandingPage;
