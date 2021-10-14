import React, {useState} from 'react';
import Presenter from './Presenter';

function Input () {
    const [value, setValue] = useState<string>('');
    
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = e.target.value;
        setValue(inputValue)
    }

    return(
        <Presenter value={value} onChange={onChange}/>
    )
}

export default Input;