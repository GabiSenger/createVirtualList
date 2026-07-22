import React, {useRef} from "react"
import { useVirtualizer } from "@tanstack/react-virtual"
import {data} from "../services/data"
import {Card} from "./Card"
import {CardStyles} from "./Card.styles"


export const CardsArea = () => {
    const scrollRef = useRef<HTMLDivElement>(null)
    const virtualizer = useVirtualizer({
        count: data.length,
        getScrollElement: () => scrollRef.current,
        estimateSize: () => 60,
    })

    const cardItems = virtualizer.getVirtualItems()
    const totalSize = virtualizer.getTotalSize()

    return (
    <div ref={scrollRef} style={CardStyles.page}>
        <div style={{
            height: `${totalSize}px`,
            width: '100%',
            position: 'relative'
        }}
        >
            {cardItems.map((vItem) => {
                const itemHeight = vItem.size
                const itemStart = vItem.start
                const cardText = data[vItem.index]
                return (
                    <div style={{
                        position: 'absolute',
                        height: `${itemHeight}px`,
                        transform: `translateY(${itemStart}px)`,
                        top: 0,
                        left: 0,
                        width: '100%'
                    }}
                       key={vItem.index}
                    >
                        <Card text={cardText} key={vItem.index} />
                    </div>
                )
            })}
        </div>
    </div>
    )
}