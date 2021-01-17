import React, { useState } from 'react'
import Trail from './Trail';

const SmallQuestionsText = () => {
    const [open, set] = useState(true)
    
    
    return ( 

        <Trail  open={open} onClick={() => set((state) => !state)}>
            <h1> ...to 'small' ones: </h1> 
            <h1> what is the role of specific molecules on Alzheimer diseases?  </h1>
            {/* <h1> is there anything smaller than a Quark in the universe? </h1> */}
            
        </Trail>
    );
}
 
export default SmallQuestionsText;