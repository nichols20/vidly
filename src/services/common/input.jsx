import React from 'react';

const Input = ({name, label, value, onChange, styles}) => {
    return ( 
        <div className="form-group mb-3" style={styles}>
            
            <label htmlFor={name} className="form-label">{ label }</label>
            
            <input                      
             autoFocus
             value = {value}
             onChange={onChange} 
             name={name} 
             id={name} 
             type="text" 
             className="form-control" 
            
            />
       </div>
     );
}
 
export default Input;