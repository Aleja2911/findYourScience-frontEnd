import React, { useState } from 'react'
import Trail from './Trail';

const BigQuestionsText = (text) => {
    const [open, set] = useState(true)
    
    
    return ( 

        <Trail  open={open} onClick={() => set((state) => !state)}>
            <h1> From big questions, like: </h1> 
            <h1> what are the calculations to take a person into space? </h1>
        </Trail>
    );
}
 
export default BigQuestionsText;