import React, { useState } from "react";

const Form = () => {
  const [input, setInput] = useState({ name: "", num: "" });
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState(null);

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
    <div style={{ height: "100%" }} className="container-fluid gx-0 bg-black text-center">
      <div className="container border border-danger gx-0">
        <div className="row bg-success m-5 gx-0">
          <h1 className="text-danger text-start mt-5">Todo List</h1>
          <form onSubmit={submit} className="text-white">
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
            <button className="col-3 btn btn-success bg-danger">
              {editData !== null ? "Edit" : "Submit"}
            </button>
          </form>
          {data.map((item, index) => (
            <div key={index}>
              <p className="text-white">
                Name: {item.name} Mobile: {item.num}
                <button onClick={() => remove(index)}>Remove</button>
                <button onClick={() => edit(index)}>Edit</button>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
