import React from 'react'
import { Select } from 'antd';

const { Option } = Select;

export default function SelectLang(props){
    return(
        <Select
            defaultValue={props.language}
            style={{width: 120}}
            onChange={props.toggleLanguage}
        >
            <Option value="uk">Українська</Option>
            <Option value="en">English</Option>
        </Select>
    )
}
