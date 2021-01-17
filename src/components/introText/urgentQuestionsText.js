import React, { useState } from 'react'
import Trail from './Trail';

const UrgentQuestionsText = () => {
    const [open, set] = useState(true);
    
    
    return ( 

        <Trail  open={open} onClick={() => set((state) => !state)}>
            <h1> From urgent questions: </h1> 
            <h1> how can we create renewable fuels to fight climate change?  </h1>
            
            
        </Trail>
    );
}
 
export default UrgentQuestionsText;