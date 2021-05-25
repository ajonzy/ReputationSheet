import React from 'react'
import RepSquare from "../square"

export default function(props) {
    const repSquares = () => {
        const squares = []
        for (let i=0; i<15; i++) {
            squares.push(
                <RepSquare />
            )
        }
        return squares
    }

    return (
        <div className="rep-line">
            <span>{props.block * 5 + props.line + 1}:</span>
            {repSquares()}
        </div>
    )
}