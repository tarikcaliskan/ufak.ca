import React, { useState } from 'react';
import '../../App.css';
import Link from "../../assets/svg/link.svg"
function InputURL() {
    const [value, setValue] = useState("")

    return (
        <div className="inputURL-div">
            <img src={Link}/>
            <input className="inputURL" placeholder="https://" value={value} onChange={(e) => setValue(e.target.value)} />
            <div className="convert-button">ufalt</div>
        </div>
    );
}

export default InputURL;
