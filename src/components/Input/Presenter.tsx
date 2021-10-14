import React from 'react';
import styled from 'styled-components';

interface Props{
    value:string;
    onChange:(e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function Presenter(props:Props) {
    const {value, onChange} = props;

    return(
        <Fieldset>
            <legend>정답 외 유해 위험요인을 발굴하여 주시기 바랍니다.</legend>
            <TextArea value={value} onChange={onChange}/>
        </Fieldset>
    )
}

const Fieldset = styled.fieldset`
    text-align: center;
    border-color: #2E4696;
    padding: 0;
    width: 100%;
`
const TextArea = styled.textarea`
    border: none;
    resize: none;
    height: 73.8733px;
    outline: none;
    width: 100%;
    padding: 0;
`


export default Presenter;
