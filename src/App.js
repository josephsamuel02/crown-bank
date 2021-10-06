import {  Button }  from "@material-ui/core";

import { useState  } from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Link } from "react-router-dom";
import LandingPage from './LandingPage';
import Home from './Home'
import RegisterUser from './RegisterUser'

const App = () => {

  

const hide = () =>{
  let welcomeCard = document.getElementById("welcomeCard");
   welcomeCard.style.left="100%";
   welcomeCard.style.right="100%";

}

  return (
   
  <div className="App">
        <Router>


    <Link to="/"> 
       <h1 className="header">Crowns Bank</h1> 
    </Link>  


    <div id="welcomeCard"> 
   <h3>Welcome to my test project</h3>

    <Link to="/"> <Button
       type='submit'
       variant='contained'
       color='primary'
       fullWidth
       onClick={ () => (hide())}
       >
        Okay
       </Button> 
  </Link> 

</div>;

   
          <Switch>

              <Route exact path='/'>
              <LandingPage />
              </Route>

              <Route exact path='/RegisterUser'>
              <RegisterUser/>
              </Route>

              <Route exact path='/Home'>
              <Home />
              </Route>

          </Switch>
      </Router>
</div>

  );
}

export default App;
