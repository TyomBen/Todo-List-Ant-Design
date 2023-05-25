
import { useState } from "react";
import {Button, Form, Input, Space, List} from "antd";
import 'antd/dist/reset.css';
const GetingDataAndShowing = () => {
const [newdatas, setNewDatas] = useState ([]);
    const handleSetInArray = (event) => {
        event.preventDefault()
        setNewDatas ([... newdatas, event.target.elements.task.value]);
        event.target.reset()
    }
    const hanlderDelete = (index) => {
        setNewDatas (newdatas.filter ((element, ind) => ind !== index))
    }
    const hanlderDeleteAll = () => {
        setNewDatas([])
    }
        return(
            
            <>
 
            <Space>
        <form onSubmit = {handleSetInArray}>
          <Input type="text" name="task" size="large" />
            <button> Add</button>   
        </form>
        <button onClick={hanlderDeleteAll}>Delete All</button>
      </Space>
      <ul>
            {
                newdatas.map ((item, index) => {
                    return(
                        <>
                        <li key={index}>{item}</li>
                        <button onClick={() => hanlderDelete(index)}>Delete</button>
                        </>
                        
                    )
                    
                })
            }
            </ul>
        </>
        
    )
}


export default GetingDataAndShowing;