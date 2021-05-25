import React from 'react'

import RepLine from "./repLine"

export default function(props) {
    const repLines = () => {
        const lines = []
        for (let i=0; i<5; i++) {
            lines.push(
                <RepLine block={props.block} line={i}/>
            )
        }
        return lines
    }

    return (
        <div className="duty-block">
            <h2>Sessions {props.block * 5 + 1}-{props.block * 5 + 5}</h2>
            {repLines()}
        </div>
    )
}