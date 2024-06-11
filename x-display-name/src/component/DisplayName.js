import React, { useState } from "react";

const DisplayName = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [submit, setSubmit] = useState(false);

  const handChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    setSubmit(true);
    setFullName(`${firstName} ${lastName}`);
    // setFirstName('');
    // setLastName('');
  };

  return (
    <>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name:&nbsp;</label>
        <input type="text" value={firstName} onChange={handChangeFirstName} required/>
        <br />
        <label>Last Name:&nbsp;</label>
        <input type="text" value={lastName} onChange={handChangeLastName} required/>
        <br />
        <button type="submit">Submit</button>
        
       
      </form>
     {fullName&&<p>Full Name: {fullName} </p> }
    </>
  );
};

export default DisplayName;
