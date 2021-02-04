import React, { useState } from 'react';

const InputHook = (val) => {
    const [state,setState]= useState(val)

    const inputField = (e)=>{
        setState(e.target.value)

    }
    const clearField =()=>{
        setState("")
    }

    return [state,inputField,clearField]
};

export default InputHook;