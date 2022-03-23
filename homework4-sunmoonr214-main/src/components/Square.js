import React from "react";
import './styles/Square.css';

function Square(click) {
    return ( <button className = "square"
        onClick = { click.onClick } > { click.value }
        </button>
    )
}

export default Square;