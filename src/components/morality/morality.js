import React from 'react'

import MoralityBlock from "./moralityBlock"

export default function() {
    const moralityBlocks = () => {
        const levelsList = [100,90,80,70,69,60,50,49,40,30,20,10,0]

        const blocks = []
        levelsList.forEach(level => {
            blocks.push(
                <div className="morality-blocks-wrapper">
                    {level < 49 ? <span>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</span> : null}
                    <MoralityBlock level={level} />
                    {level > 69 ? <span>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</span> : null}
                </div>
            )
        })
        return blocks
    }
    return (
        <div className="morality">
            <h1>MORALITY</h1>
            <div className="morality-wrapper">
                {moralityBlocks()}
            </div>
        </div>
    )
}