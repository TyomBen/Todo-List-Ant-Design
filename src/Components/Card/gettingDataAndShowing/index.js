
import React, { useState } from "react";
import {Button, Form, Input, Space, List} from "antd";
import 'antd/dist/reset.css';
const GetingDataAndShowing = () => {
const [newdatas, setNewDatas] = useState ([]);
const [inputvalue, setInputValue] = useState ('')
    const handleSetInArray = () => {
        if (inputvalue.trim() !== ''){
            setNewDatas ([... newdatas, inputvalue]);
        }else {
            return;
        }
         setInputValue ('');
        
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
        <Form onFinish = {handleSetInArray}>
          <Input type="text" size="large" value={inputvalue} onChange={(event) => setInputValue (event.target.value)}/>
            <Button htmlType="submit"> Add</Button>   
        </Form>
        <Button onClick={hanlderDeleteAll}>Delete All</Button>
      </Space>
      <List>
            {
                newdatas.map ((item, index) => {
                    return(
                        <React.Fragment key={index}>
                        <List.Item>{item}</List.Item>
                        <Button onClick={() => hanlderDelete(index)}>Delete</Button>
                        </React.Fragment>
                    )
                    
                })
            }
            </List>
        </>
        
    )
}


export default GetingDataAndShowing;