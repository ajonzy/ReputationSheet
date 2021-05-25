import React from 'react'

import MoralitySquare from "../square"

import jedi from "../../../static/assets/jedi.png"

export default function(props) {
    const content = {
        100: {name: "100 :", effect: "+1 force rating OR +1 boost die to all checks, +1 reputation each session", squares: 1},
        90: {name: "90 + :", effect: "+2 strain threshold (3 total)", squares: 10},
        80: {name: "80 + :", effect: "Add 1 LSDP to pool, Redemption from being a Dark Side Force User", squares: 10},
        70: {name: "70 + :", effect: "+1 strain threshold", squares: 10},
        69: {name: "", effect: "", squares: 10},
        60: {name: "", effect: "", squares: 9},
        50: {name: `----- 50 (Start) ${<MoralitySquare />} -----`, effect: "", squares: 0},
        49: {name: "", effect: "", squares: 9},
        40: {name: "40 - :", effect: "+1 wound threshold, -1 strain threshold", squares: 10},
        30: {name: "30 - :", effect: "Add 1 DSDP to pool, Become a Dark Side Force User", squares: 10},
        20: {name: "20 - :", effect: "+2 wound threshold, -2 strain threshold (3 total)", squares: 10},
        10: {name: "10 - :", effect: "+1 force rating OR +1 boost die to all checks, +1 reputation each session", squares: 9},
        0: {name: "0 :", effect: "Character is permanently lost to the dark side", squares: 1}
    }

    const levelSquares = () => {
        const squares = []
        for (let i=0; i<content[props.level].squares; i++) {
            squares.push(
                <MoralitySquare />
            )
        }
        return squares
    }

    return (
        <div className="morality-block" style={props.level == 50 ? {gridTemplateRows: "76px"} : {}}>
            {props.level !== 50 ? <h4>{content[props.level].name}</h4> :
            <div className="morality-name-wrapper" style={props.level == 50 ? {gridColumn: "1/-1"} : {}}>
                <h2>----- 50 (Start)</h2>
                <MoralitySquare />
                <h2>-----</h2>
                <img src={jedi} alt=""/>
            </div>
            }
            <div className="squares-wrapper" style={{width: `${30 * content[props.level].squares}px`, justifySelf: props.level == 0 || props.level == 100 ? "center" : null}}>
                {levelSquares()}
            </div>
            <div className="consequenses-wrapper">
                <div className="morality-effect">{content[props.level].effect}</div>
            </div>
        </div>
    )
}