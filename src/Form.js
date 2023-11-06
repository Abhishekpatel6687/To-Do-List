import React from 'react'

const Form = () => {
  return (
    <div className='container'>
    <form>
        <label>First Name</label>
        <input type='text' placeholder='Enter your name' />
        <label>Mobile</label>
        <input type='number' placeholder='Enter your name' />
        <label>Date</label>
        <input type='date' placeholder='Enter your name' />
        <button className='btn btn-success'>Add</button>
    </form>
    </div>
  )
}

export default Form;
