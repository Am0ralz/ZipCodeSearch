import React from "react"

function CityCard(props) {
    return (
        <div>
            <h3>{props.city.LocationText}</h3>
            <ul>
                <li>
                    <p>State:{props.city.State}</p>
                </li>
                <li>
                    <p>Location:({props.city.Lat},{props.city.Long}) </p>
                </li>
                <li>
                    <p>Population (estimated):{props.city.EstimatedPopulation} </p>
                </li>
                <li>
                    <p>Total Wages:{props.city.TotalWages} </p>
                </li>
            </ul>
        </div>
    )
}

export default CityCard
