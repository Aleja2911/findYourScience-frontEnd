import React, { useState } from 'react'
import Trail from './Trail';

const HumanQuestionsText = () => {
    const [open, set] = useState(true)
    
    
    return ( 

        <Trail  open={open} onClick={() => set((state) => !state)}>
            <h1> ...to human questions: </h1> 
            <h1> how to sucessfully treat leprosy and not get your idea stolen? </h1>
            
        </Trail>
    );
}
 
export default HumanQuestionsText;