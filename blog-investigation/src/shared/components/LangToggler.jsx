import React from 'react'
import { Select } from 'antd';

const { Option } = Select;

export default function LangToggler({language, toggleLanguage}){
    return(
        <Select
            defaultValue={language}
            style={{
                width: 120,
            }}
            onChange={toggleLanguage}
        >
            <Option value="en">English</Option>
            <Option value="uk">Українська</Option>
        </Select>
    )
}
