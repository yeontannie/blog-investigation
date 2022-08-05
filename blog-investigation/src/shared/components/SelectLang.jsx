import React from 'react'
import { Select } from 'antd';

const { Option } = Select;

export default function SelectLang({language, toggleLanguage}){
    return(
        <Select
            defaultValue={language}
            style={{width: 120}}
            onChange={toggleLanguage}
        >
            <Option value="uk">Українська</Option>
            <Option value="en">English</Option>
        </Select>
    )
}
