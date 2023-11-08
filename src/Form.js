import React, { useState } from 'react'


const Form = () => {
  const [state, setState] = useState({ name: '', mobile: '' });

  const update = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submit =(e)=>{
    e.preventDefault()
    console.log(state)
  }
  return (
    <div style={{height:"100%"}} className="container-fluid gx-0 bg-black text-center" >
    <div className="container border border-danger gx-0 ">

    <div className="row bg-success m-5 gx-0">
    <h1 className="text-danger text-start mt-5">Todo List</h1>
    <form className=" text-white ">
    <div>
        <label className="col-3">First Name</label>
        <input type='text'  name="name" onChange={update} placeholder='Enter your name' className="col-3" />
        </div>
        <div>
        <label  className="col-3">Mobile</label>
        <input type='number' name="mobile" onChange={update} placeholder='Enter your name' className='col-3'/>
        </div>
        <button onClick={submit} className='col-3 btn btn-success bg-danger'>Add</button> 
    </form>
    </div>

    </div>
    </div>
  )
}

export default Form;
