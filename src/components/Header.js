import React from "react"
import ReactDOM from "react-dom"
import worldIcon from "../images/World_icon.png";

export default function Header() {
    return (
        <header>
            <img id = 'header-img' src = {worldIcon} />
            <h2 id = 'header-title'>my travel journal.</h2>
        </header>
    )
}