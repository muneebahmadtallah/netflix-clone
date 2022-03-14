import React, { useState } from "react";

export default function RegistrationForm() {
     const [fulname, setFulName] = useState({
       fname : "",
       lname : "",
       email : "",
       phone : ""
     });


    const inputHandler = (event) => {

        // const value = event.target.value;
        // const name = event.target.name;

        //by using object destructin we shorten above 2 line in just 1 following line.
        const{name, value} = event.target;


        /* setFulName((preValue) => {
        if(name === "fname") {
          return {
            fname : value,
            lname : preValue.lname
          };
        } else if (name === "lname") {
          return {
            fname : preValue.fname,
            lname : value ,
            email : preValue.email
        };
        } else if (name === "email") {
          return {
            fname : preValue.fname,
            lname : preValue.lname,
            email : value 
        };
        } else if (name === "phone") {
          return {
            fname : preValue.fname,
            lname : preValue.lname,
            email : preValue.email,
            phone : value
        };
        }
        }); */

        //by using spread operator we shorten dozen of above line code into minimal following line.
        setFulName((preValue) => {
          return{
            ...preValue,
            [name] : value
          }
        })
        

};
const onSubmit = (event)=>{
        event.preventDefault();
        // setDisplay({display})
}

  return(
      <>
      <div className="container-fluid">
          <div className="row justify-content-center">
          <div className="col-5">
      <h1>Registration form {fulname.fname}{fulname.lname}</h1>
      <p>{fulname.email} {fulname.phone}</p>
        <form onSubmit={onSubmit}>
      <input className="form-control"
      type="text" placeholder="firstName" 
      name="fname"
      value={fulname.fname} 
      onChange={inputHandler}/>
        <br/>
      <input className="form-control" 
      type="text" placeholder="lastName" 
      name="lname"
      value={fulname.lname} 
      onChange={inputHandler}/>
        <br/>
      <input className="form-control" 
      type="email" placeholder="email" 
      name="email"
      value={fulname.email} 
      onChange={inputHandler} autoComplete="off"/>
        <br/>
      <input className="form-control" 
      type="number" placeholder="phone" 
      name="phone"
      value={fulname.phone} 
      onChange={inputHandler}/>
      
      <button className="my-4 btn btn-primary" type="submit" value="click me">Submit</button>
    </form>
    </div>
    </div>
    </div>
    
      </>
  );
}
