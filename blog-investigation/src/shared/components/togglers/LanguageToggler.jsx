import React from 'react'
import { Select } from 'antd';

import { useUserSettingsContext } from '../../store/UserSettingsProvider';

const { Option } = Select;

export default function LanguageToggler(){
    const {language, toggleLanguage} = useUserSettingsContext()
    
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