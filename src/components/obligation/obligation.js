import React from 'react'

import ObligationBlock from "./obligationBlock"

export default function() {
    const obligationBlocks = () => {
        const levelsList = [5,10,15,20,25,30,35,40]

        const blocks = []
        levelsList.forEach(level => {
            blocks.push(
                <div className="obligation-blocks-wrapper">
                    <ObligationBlock level={level} />
                </div>
            )
        })
        return blocks
    }
    return (
        <div className="obligation">
            <h1>OBLIGATION</h1>
            <div className="obligation-wrapper">
                <div className="blocks-wrapper">
                    {obligationBlocks()}
                </div>

                <div className="obligation-options">
                    <h2>Options</h2>
                    <div className="obligation-option new">
                        +5: +1000 Credits. Character creation only
                    </div>

                    <div className="obligation-option new">
                        +5: +5 XP. Character creation only
                    </div>

                    <div className="obligation-option new">
                        +10: +2500 Credits. Character creation only
                    </div>

                    <div className="obligation-option new">
                        +10: +10 XP. Character creation only
                    </div>

                    <br/>

                    <div className="obligation-option">
                        +1: Call in for minor help; Add a boost die to one check
                    </div>

                    <div className="obligation-option">
                        +1: Minor advance planning; Add a setback die to one check
                    </div>

                    <div className="obligation-option">
                        +1: Take out a loan; Gain 100 credits.
                    </div>

                    <div className="obligation-option">
                        +3: Call in for medium help; Add an ability die to one check
                    </div>

                    <div className="obligation-option">
                        +3: Medium advance planning; Add a difficulty die to one check
                    </div>

                    <div className="obligation-option">
                        +5: Call in for major help; Add a proficiency die to one check
                    </div>

                    <div className="obligation-option">
                        +5: Major advance planning; Add a challenge die to one check
                    </div>

                    <div className="obligation-option">
                        +5: Access the black market; Purchase one item 1 rarity higher than normally could be purchased. May be purchased multiple times to increase the rarity of that one item.
                    </div>

                    <div className="obligation-option">
                        +7: Call in a minor favor; An npc in the area helps solve a minor task. Details must be approved by GM, but could include providing small information on enemy base, or helping find a small item needed by the player.
                    </div>

                    <div className="obligation-option">
                        +10: Reroll one check with same dice pool. +15 if that check contains a despair (Once per session)
                    </div>

                    <div className="obligation-option">
                        +13: Call in a major favor; An npc in the area helps solve a major task. Details must be approved by GM, but could include providing major information about an enemy base, or providing a substantial item needed by the player.
                    </div>

                    <div className="obligation-option">
                        +15: Gain 5 XP.
                    </div>

                    <div className="obligation-option">
                        +20: Cheat death.
                    </div>
                </div>
            </div>
        </div>
    )
}