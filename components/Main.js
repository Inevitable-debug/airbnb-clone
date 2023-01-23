import React from "react"

export default function Main(props) {
    return (
        <main>
            <img className = 'main-img' src={props.item.imageUrl} />
            <div className = 'main-content'>
                <div className = 'main-section-1'>
                    <img className = 'main-pointer' src='./images/pointer.png' />
                    <h4 className = "main-country">{props.item.location.toUpperCase()} <span className = 'main-span'><a href = {`${props.item.googleMapsUrl}`} target = "_blank">View on Google Maps</a></span></h4>
                </div>
                <h1 className = "main-location" >{props.item.title}</h1>
                <h4 className = "main-date">{props.item.startDate} - {props.item.endDate}</h4>
                <p className = "main-paragraph">{props.item.description}</p>
            </div>
        </main>
        
    )
}