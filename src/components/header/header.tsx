import '../../App.css';
import React from "react"
import Logo from "./logo"
import SignIn from "./signIn"
import SignUp from "./signUp"
function Header() {
    return (
        <header className="header flex justify-between">
            <Logo />
            <SignIn />
            <SignUp />
        </header>
    );
}

export default Header;
