import React, { useEffect, useState } from 'react'
import './button.css'

export const FrontPage = () => {
    const [input , setInput] = useState(" ");
    const [items , setItems] = useState([]);
     const addItems = () => {
        if(!input)
        {
            alert("Plz Fill the data")
        }
        else
        {
            const newInput = {
                id : new Date().getTime().toString(),
                name : input
            }
            setItems([...items ,newInput])
     
        }
     }
     const delItems = (index) => {
        const updatedItems = items.filter ((element) =>{
            return element.id !== index; 
        })
        setItems(updatedItems);
     } 
     const removeAll = ()=>{
        setItems([]);
     }


    useEffect(() => {
       localStorage.setItem(" my todo lis", JSON.stringify(items))
    }, [items]);

     const log ={
        width :"200px", 
        height:"auto"
    }


  return (
  < >
  <div className="container ">
        <div className=" row justify-content-center mt-5 ">
            <div className="bg-black col-md-6 text-center">
                <img src="/images/logo.jpeg" alt="Logo" style={log}/>
                <h4 className="mt-3 text-light  ">Add your list here ✌</h4>
                <div className="input-group mb-3     ">
                    
                    <input type="text" className="form-control " value={input} onChange={(e)=>setInput(e.target.value)} placeholder="✍Add item..."/>
                   <button className="btn btn-outline-border  bg-body appended" onClick={addItems}   type="button"> <i  className="bi bi-plus-circle-fill "></i> </button>
                   
                </div>

                <div className=" mb-3 ">

                    {
                        items.map((element ,index)=>{
                            return (
                                <span className='form-control mb-3 bg-primary border-primary text-left text-light rounded' key={index}>
                                 {element.name}
                  
                        <button className="float-right rounded bg-dark  border-primary ms-2" type="button" onClick={()=> delItems(element.id)}> <i className="bi bi-trash-fill text-danger"></i> </button>
                        <button className="float-right rounded   bg-dark  border-primary" type="button"> <i className="bi bi-pencil-square text-info"></i> </button>
                   
                  </span>
                            )
                        })
                    }
                  
                   
                </div>


               
                

                <button type="button" class="btn btn-primary btn-custom" onClick={removeAll}>Check List</button>
            </div>
        </div>
    </div>
  </>
  );
}
