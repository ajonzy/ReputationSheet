import React from 'react'

import ObligationSquare from "../square"

export default function(props) {
    const content = {
        5: "-1 strain threshold",
        10: "-2 strain threshold \n(3 total)",
        15: "A \"friend\" calls in \na favor",
        20: "Bounty is placed \non head",
        25: "+2 setback dice \nto all actions",
        30: "-5 to rarity availability.",
        35: "XP and credits may not be spent. ",
        40: "XP and credits may not be gained."
    }

    const levelSquares = () => {
        const squares = []
        for (let i=0; i<5; i++) {
            squares.push(
                <ObligationSquare />
            )
        }
        return squares
    }

    return (
        <div className="obligation-block" style={props.level == 5 ? {borderTopRightRadius: "20px", borderTopLeftRadius: "20px"} : props.level == 40 ? {borderBottomRightRadius: "20px", borderBottomLeftRadius: "20px"} : {}}>
            <div className="squares-wrapper" style={{width: `150px`}}>
                {levelSquares()}
            </div>
            <div className="consequenses-wrapper">
                <div className="obligation-consequense">{content[props.level]}</div>
                {props.level == 30 || props.level == 35 || props.level == 40 
                ? <span>Takes effect immediately</span>
                : null}
            </div>
        </div>
    )
}