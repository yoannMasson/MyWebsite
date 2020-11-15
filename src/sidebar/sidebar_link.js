import { useState } from "react"


export default function SidebarLink({link, text, icon, glowCursor, goToLink}) {

    return (       
        <a href={link}
        onMouseEnter={e => glowCursor(true)}
        onMouseLeave={e => glowCursor(false)}
        onClick={goToLink}>
        { icon && <i className="material-icons">{icon}</i> }
        <span className="nav-title" >{text}</span></a> 
    )

    
}