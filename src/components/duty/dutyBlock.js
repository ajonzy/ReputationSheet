import React from 'react'

import DutySquare from "../square"

export default function(props) {
    const content = {
        unknown: { name: "Unknown", levels: 2, rewards: ["+250 credits per session"] },
        acknowledged: { name: "Acknowledged", levels: 3, rewards: ["Consumable pool per session, +50 credit value", "+1 reputation per session"] },
        recognized: { name: "Recognized", levels: 3, rewards: ["+250 credits per session value (500 total)", "+1xp per session"] },
        trusted: { name: "Trusted", levels: 3, rewards: ["One time bonus of 5000 credits", "Consumable pool per session, +75 credit value"] },
        respected: { name: "Respected", levels: 3, rewards: ["+250 credits per session (750 total)", "Consumable pool per session, +175 credit value", "+1 free boost die once per encounter"] },
        admired: { name: "Admired", levels: 3, rewards: ["+1 free ability die once per encounter", "+1 LSDP at start of session", "Once per session, may reroll one check"] },
        revered: { name: "Revered", levels: 3, rewards: ["Dedication OR +1 force rating", "+1 free proficiency die once per encounter"] }
    }

    const levelSquares = () => {
        const squares = []
        for (let i=0; i<content[props.level].levels; i++) {
            squares.push(
                <DutySquare />
            )
        }
        return squares
    }

    const levelRewards = () => {
        const rewards = []
        content[props.level].rewards.forEach(reward => {
            rewards.push(
                <div className="duty-reward">{reward}</div>
            )
        })
        return rewards
    }

    return (
        <div className="duty-block">
            <h2>{content[props.level].name}</h2>
            <div className="squares-wrapper" style={{width: `${30 * content[props.level].levels}px`}}>
                {levelSquares()}
            </div>
            <div className="rewards-wrapper">
                {levelRewards()}
            </div>
        </div>
    )
}