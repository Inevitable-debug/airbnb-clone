import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header"
import Main from "./components/Main"
import data from "./data"


export default function App() {
    const main = data.map(item => {
        return (
            <Main 
                key = {item.id}
                item = {item}
            />
        )
    })
        return (
            <div>
                <Header />
                {main}
            </div>
    )
}