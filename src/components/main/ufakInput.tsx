import React, { useState } from 'react';
import '../../App.css';

function UfakInput() {
    const [value, setValue] = useState("")

    return (
        <div className="main">
            <input placeholder="Uzunca bir url gir" value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    );
}

export default UfakInput;
