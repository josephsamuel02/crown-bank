
import './App.css';

import { MdAccessibility, MdAttachMoney, 
  MdStarBorder, MdTouchApp, MdEmail, MdPhoneAndroid} from "react-icons/md";
import { IconContext } from "react-icons/lib";


import { MyContext } from './Context';
import { useContext, useState, useEffect } from 'react';



const Home= () => {

const context = useContext(MyContext)
const [ profile, setProfile ] = useState([]) 

const id = Math.random(200);



useEffect(()=>{
  setProfile(context.state.userinfo)

},[context])


return (

  <div className="Home">

<IconContext.Provider value={{


   }}>

<br />
       <div className="welcome">

            <p className="welcometext">
              welcome to the bank
            that treats you as royalty you are.
            </p>

        </div>


{ profile.map((data) => (

<div key={id} id='profile'>
      <p id='name'>{data.name}</p>
      <p id='email'><MdEmail 
          style={{color: "rgb(99, 21, 145)",
          fontSize: "20px",}}/>   {data.email}</p>

      <p id='phone'><MdPhoneAndroid 
      style={{color: "rgb(99, 21, 145)",
      fontSize: "20px",}}/>    {data.phone}</p>

    <div id='personal'>
      <p id='gender'>Gender: {data.gender}</p>
      <p id='birthday'>Birthday: {data.birthday}</p>
      <p id='address'>Address: {data.address}</p>
      <p id='accNo'>Account No: {data.accNo}</p>

    </div>

    <p id='accBal'>Account balance:
     <span style={{color: 'rgb(41, 201, 41)'}}>$ 2,431.14</span>
     </p>
</div>


))}









  <div className="cardsbox">

        <div className="card">
         <p>Best banking experience </p>
         
        <p className="cardicon"><MdStarBorder
          style={{color: "rgb(99, 21, 145)",
          fontSize: "100px",}} /> </p>
        </div>

        <div className="card">
         <p>Be in charge of your finances</p>
         <p className="cardicon">
           <MdAttachMoney
          style={{color: "rgb(99, 21, 145)",
          fontSize: "100px",}}/>
          </p>
        </div>

        <div className="card">
         <p>We execute the commands of your finger tips</p>
         <p className="cardicon">  <MdTouchApp 
          style={{color: "rgb(99, 21, 145)",
          fontSize: "100px",}}/> </p>
        </div>

        <div className="card">
         <p>We are waiting for you</p>
         <p className="cardicon"><MdAccessibility 
          style={{color: "rgb(99, 21, 145)",
          fontSize: "100px",}}/> </p>
        </div>

  </div>



  </IconContext.Provider>
<br />
    </div>

  );
}

export default Home;
