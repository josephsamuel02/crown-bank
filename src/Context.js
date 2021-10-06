import React,{ PureComponent } from "react";
const MyContext = React.createContext();




class MyProvider extends PureComponent {

state=
{
bankname: 'Crown Bank',
userinfo:[ {
name: 'Joseph Samuel',
email: 'samueljda01@gmail.com',
phone: '09056974667',
gender: 'male',
address: '3, adefolu drive allen ikeja',
birthday: '21/06/1995',
accNo: '1224549032'
} ],

}

addUserinfo= (user) => {
    this.setState(()=>(
        {
            userinfo: [
                // ...prevstate.userinfo,
                 user
            ]
        }
    ))
}

    render(){

        return(

<MyContext.Provider 
value={
    {
state: this.state,
addUserinfo: this.addUserinfo,
    }
}
>

{ this.props.children }
</MyContext.Provider>

        )
    }
}

export { MyProvider, MyContext }