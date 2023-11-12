

import React, { useState } from "react";

const Form = () => {
  const [input, setInput] = useState({ name: "", num: "" });
  const [data, setData] = useState([]);
  // const [editData, setEditData] = useState(0);

  const update = (e) => { 
    if("name" === e.target.name || "num" ===e.target.num){
      setInput({...input, name:e.target.value})

    }else{
    setInput({...input, num:e.target.value})
    }
 
  };
  const submit = (e) =>{  
    e.preventDefault()  
    if( "name" === "" && "num" === ""){
      alert("hjhj")
    }else{
      setData([...data, input])
    }
    // setInput({name:"",num:""})
  };

  const remove = (index) => {
    const NewData = data.filter( (item,ind) => ind !== index );
    setData([...NewData])
  }

  // const edit =(index) =>{
  //   const newEdit = data.find((item,i) => {
  //       if(i===index){
  //       setInput({name:item.data.name, num:item.data.num})
  //     }
  //     return setEditData(newEdit)
  //   })
  // }
  return (
    <div
      style={{ height: "100%" }}
      className="container-fluid gx-0 bg-black text-center"
    >
      <div className="container border border-danger gx-0 ">
        <div className="row bg-success m-5 gx-0">
          <h1 className="text-danger text-start mt-5">Todo List</h1>
          <form className=" text-white ">
            <div>
              <label className="col-3">First Name</label>
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={update}
                placeholder="Enter your name"
                className="col-3"
              />
            </div>
            <div>
              <label className="col-3">Mobile</label>
              <input
                type="number"
                name="num"
                value={input.num}
                onChange={update}
                placeholder="Enter your name"
                className="col-3"
              />
            </div>
            <button
              onClick={submit}
              className="col-3 btn btn-success bg-danger"
            >
              Add
            </button>
          </form>
          {
            data.map((item, index)=>{
              return(
                <div key={index}>
                  <p className="text-white">Name    {item.name} Mobile   {item.num}
                  <button onClick={()=>remove(index)}>Remove</button>
                  {/* <button onClick={()=>edit(index)}>Edit</button> */}
                  </p>
                </div>
              )

            })
          }
        </div>
      </div>
    </div>
  );
};

export default Form;
