import { useState } from "react"


export default function SidebarLink({link, text, icon, glowCursor}) {

    return (       
        <a href={link}
        onMouseEnter={e => glowCursor(true)}
        onMouseLeave={e => glowCursor(false)}>
        { icon && <i className="material-icons">{icon}</i> }
        <span className="nav-title" >{text}</span></a> 
    )

    
}