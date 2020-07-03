import '../../App.css';
import React from "react"
import InputURL from "./inputURL"
function Main() {
    return (
        <main className="main flex-center flex-dir-col f-b text-shadow">
            <h1>UFAKÇA BİR İŞİMİZ VAR</h1>
            <h2>Ufaltmak istediğin o devasa uzunluktaki bağlantı adresini gir</h2>
            <InputURL/>
        </main>
    );
}

export default Main;
