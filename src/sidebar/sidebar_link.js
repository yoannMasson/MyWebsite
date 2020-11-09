import { useState } from "react"


export default function SidebarLink({link, text, glowCursor}) {

    return (       
        <a href={link}
        onMouseEnter={e => glowCursor(true)}
        onMouseLeave={e => glowCursor(false)}>
        <span className="nav-title" >{text}</span></a> 
    )

    
}