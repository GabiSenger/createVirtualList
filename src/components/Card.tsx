import React, {useRef} from "react"
import { useVirtualizer } from "@tanstack/react-virtual"
import {data} from "../services/data"
import {CardStyles} from "./Card.styles"

type CardProps = {
    text: string
}

export const Card = ({text} : CardProps) => {

    return (
    <div style={CardStyles.container}>   
        {text}
    </div>
    )
}