// import React, { useEffect, useState } from "react";

// const getLocalItems = () => {
//   let list = localStorage.getItem("lists");

//   if (list) {
//     return JSON.parse(localStorage.getItem("lists"));
//   } else {
//     return [];
//   }
// };
// const Form = () => {
//   const [input, setInput] = useState({ name: "", num: "" });
//   const [data, setData] = useState(getLocalItems());
//   const [editData, setEditData] = useState(null);

//   const update = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const submit = (e) => {
//     e.preventDefault();

//     if (input.name === "" || input.num === "") {
//       alert("Please fill in all fields");
//     } else {
//       if (editData !== null) {
//         const newData = data.map((item, ind) =>
//           editData === ind ? { name: input.name, num: input.num } : item
//         );
//         setData(newData);
//         setEditData(null);
//       } else {
//         setData([...data, input]);
//       }

//       setInput({ name: "", num: "" });
//     }
//   };

//   const remove = (index) => {
//     const newData = data.filter((item, ind) => ind !== index);
//     setData(newData);
//   };

//   const edit = (index) => {
//     setEditData(index);
//     setInput(data[index]);
//   };

//   function AllDelete() {
//     setData([]);
//   }
//   // add data to localStorage
//   useEffect(() => {
//     localStorage.setItem("lists", JSON.stringify(data));
//   }, [data]);

//   return (
//     <div className="container-sm bg-dark text-center">
//       <h1 className="text-info ">Todo List</h1>
//       <form onSubmit={submit} className="text-white">
//         <label className="fs-4">First Name</label>

//         <input
//           className="form-control mt-2 mb-3 text-center fs-5"
//           type="text"
//           name="name"
//           value={input.name}
//           onChange={update}
//           placeholder="Enter your name"
//         />

//         <label className="fs-4">Mobile</label>
//         <input
//           className="form-control mt-2 mb-3 text-center fs-5"
//           type="number"
//           name="num"
//           value={input.num}
//           onChange={update}
//           placeholder="Enter mobile number"
//         />

//         <button className="btn btn-primary fs-5">
//           {editData !== null ? "Edit" : "Submit"}
//         </button>
//       </form>
//       {data.map((item, index) => (
//         <div key={index} className="container bg-info mt-3">
//           <p className="todo">
//             <p className="col-6 text-start">Name: {item.name} </p>
//             <p className="text-center">Mobile: {item.num} </p>
//           </p>
//           <button
//             onClick={() => remove(index)}
//             className="btn btn-danger rounded-4 mx-2"
//           >
//             Delete
//           </button>
//           <button
//             onClick={() => edit(index)}
//             className="btn btn-primary rounded-4"
//           >
//             Edit
//           </button>
//         </div>
//       ))}

//       {data.length >= 1 && (
//         <button onClick={AllDelete} className="btn btn-danger mt-4 fs-5">
//           All Delete
//         </button>
//       )}
//     </div>
//   );
// };

// export default Form;
import React, { createContext, useEffect, useState } from "react";
import List from "./List";
import "./App.css";

const AllData = createContext();

const Form = () => {
  const [input, setInput] = useState({ name: "", textarea: "", option: "" });
  const [data, setData] = useState(getLocalItems());
  const [edit, setEditData] = useState(null);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(data));
  }, [data]);

  const handleSbumit = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (input.name === "" || input.textarea === "" || input.option === "") {
      alert("please fill all fields");
    } else {
      if (edit !== null) {
        const newData = data.map((item, ind) =>
          ind === edit
            ? {
                name: input.name,
                textarea: input.textarea,
                option: input.option,
              }
            : item
        );
        setData(newData);
        setEditData(null);
      } else {
        setData([...data, input]);
      }
      setInput({ name: "", textarea: "", option: "" });
    }
  };

  const Edit = (index) => {
    setInput(data[index]);
    setEditData(index);
  };

  const Delete = (index) => {
    const newData = data.filter((item, i) => i !== index);
    setData(newData);
  };

  const AllDelete = () => {
    setData([]);
  };

  function getLocalItems() {
    let list = localStorage.getItem("taskList");
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  }
  const handleToggleTodo = (index) => {
    const newData = [...data];
    newData[index].checked = !newData[index].checked;
    setData(newData);
  };
  return (
    <div className="container">
      <div className="form-container">
        <form className="form">
          <input
            type="text"
            value={input.name}
            name="name"
            placeholder="Enter your name"
            onChange={handleSbumit}
          />
          <textarea
            value={input.textarea}
            name="textarea"
            placeholder="Enter your description"
            onChange={handleSbumit}
          />
          <div className="option">
            <select name="option" value={input.option} onChange={handleSbumit}>
              <option value="">Priority Level</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <button onClick={submit} className="button">
              {edit === null ? "Add Task" : "Edit Task"}
            </button>
          </div>
        </form>
        <AllData.Provider
          value={{
            data: data,
            edit: Edit,
            deleteList: Delete,
            AllDelete: AllDelete,
            handleToggleTodo: handleToggleTodo,
          }}
        >
          <List />
        </AllData.Provider>
      </div>
    </div>
  );
};

export default Form;
export { AllData };
