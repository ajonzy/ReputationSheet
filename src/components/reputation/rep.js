import React from 'react'

import RepBlock from "./repBlock"

export default function() {
    const repBlocks = () => {
        const blocks = []
        for (let i=0; i<6; i++) {
            blocks.push(
                <RepBlock block={i}/>
            )
        }
        return blocks
    }

    return (
        <div className="rep">
            <h1>REPUTATION</h1>
            <div className="rep-wrapper">
                {repBlocks()}
            </div>
        </div>
    )
}