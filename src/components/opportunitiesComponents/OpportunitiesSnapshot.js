import { useState } from "react"
import { opportunities } from "./OpportunitiesInfo"
import "./Animations.css"

const OpportunitiesSnapshot = () => {

    const [expanded, setExpanded] = useState({})

    const toggleExpanded = (position) => {
        setExpanded((prevState) => {
            const setToFalse = Object.fromEntries(Object.keys(prevState).map(key => [key, false]))
            return {...setToFalse, [position]: !prevState[position]}
        })
    }

    return(
        <div>
            {
                Object.keys(opportunities).map((position, i) => {
                    const {type, timeline, summary} = opportunities[position]
                    return(
                        <div key={i} className="flex flex-col gap-y-5 p-4 border-b">
                            <h1 className="text-[1em] w-max font-bold hover:cursor-pointer hover:underline"
                            onClick={() => {
                                toggleExpanded(position)
                            }}
                            >{position}</h1>
                            <div className="flex items-center justify-between text-xs font-light">
                                <h1>{type}</h1>
                                <h1>{timeline}</h1>
                            </div>
                            <div className={`wrapper ${expanded[position] === true ? "is-open" : ""}`}>
                                <div className="inner text-sm font-regular">{summary}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default OpportunitiesSnapshot