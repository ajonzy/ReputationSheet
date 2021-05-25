import React from 'react'

import DutyBlock from "./dutyBlock"

export default function() {
    const dutyBlocks = () => {
        const levelsList = ["unknown", "acknowledged", "recognized", "trusted", "respected", "admired", "revered"]

        const blocks = []
        levelsList.forEach(level => {
            blocks.push(
                <div className="duty-blocks-wrapper">
                    <DutyBlock level={level} />
                    {level !== "reveredd" ? <hr/> : null}
                </div>
            )
        })
        return blocks
    }
    return (
        <div className="duty">
            <h1>DUTY</h1>
            <span>(10 Reputation Each)</span>
            <div className="duty-wrapper">
                {dutyBlocks()}
            </div>
        </div>
    )
}