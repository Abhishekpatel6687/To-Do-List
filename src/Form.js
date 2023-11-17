import React, { useEffect, useState } from "react";

const Form = () => {
  const [input, setInput] = useState({ name: "", num: "" });
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data))
  },[data])

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("data"))
    if(data){
      setData(data)
    }
  },[])

 const update = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();

    if (input.name === "" || input.num === "") {
      alert("Please fill in all fields");
    } else {
      if (editData !== null) {
        const newData = data.map((item, ind) =>
          editData === ind ? { name: input.name, num: input.num } : item
        );
        setData(newData);
        setEditData(null);
      } else {
        setData([...data, input]);
      }

      setInput({ name: "", num: "" });
    }
  };

  const remove = (index) => {
    const newData = data.filter((item, ind) => ind !== index);
    setData(newData);
  };

  const edit = (index) => {
    setEditData(index);
    setInput(data[index]);
  };

  return (
    <div className="container-
     bg-dark text-center">


          <h1 className="text-info ">Todo List</h1>
          <form onSubmit={submit} className="text-white">
        
              <label className="fs-4">First Name</label>
              
              <input
              className="form-control mt-2 mb-3 text-center fs-5"
                type="text"
                name="name"
                value={input.name}
                onChange={update}
                placeholder="Enter your name"
              />
           
              <label className="fs-4">Mobile</label>
              <input
                className="form-control mt-2 mb-3 text-center fs-5"
                type="number"
                name="num"
                value={input.num}
                onChange={update}
                placeholder="Enter your name"
              />
           
            <button className="btn btn-primary fs-5">
              {editData !== null ? "Edit" : "Submit"}
            </button>
          </form>
          {data.map((item, index) => (
            <div key={index} className="container bg-info mt-2">
              <p className="todo">
                <p className="col-6 text-start">Name: {item.name} </p>
                <p className="text-center">Mobile: {item.num} </p>
                </p>
                <button onClick={() => remove(index)} className="btn btn-danger mx-2">Delete</button>
                <button onClick={() => edit(index)} className="btn btn-primary">Edit</button>
            
            </div>
          ))}
        </div>
  
  );
};

export default Form;
