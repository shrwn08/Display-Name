import React,{useState} from 'react'

const DisplayName = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [submit,setSubmit] = useState(false);



    const handChangeFirstName = (event) =>{
        setFirstName(event.target.value);
    }

    const handChangeLastName = (event) =>{
        setLastName(event.target.value);
    }

    const handleSubmitbtn=(event)=>{
        event.preventDefault();
            setSubmit(true)
    }
    const getFullName = () =>{
        return(
            <span>{firstName.concat(' ',lastName)}</span>
        )
    }
   
  return (
    <div>
    <h1>Full Name Display</h1>
    <form onSubmit={handleSubmitbtn}>
        <label>First Name:&nbsp;</label>
        <input
        value={firstName}
        onChange={handChangeFirstName}
        />
        <br/>
        <label>Last Name:&nbsp;</label>
        <input 
        value={lastName}
        onChange={handChangeLastName}
        />
        <br/>
        <button 
        type='submit'
        
        >Submit</button>
    </form>
    {submit?<p>Full Name:&nbsp;{getFullName()}</p>:null}
    
    </div>
  )
}

export default DisplayName